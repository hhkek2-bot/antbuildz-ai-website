'use client';

type CrawlMode = 'balanced' | 'sitemap' | 'links';
type CrawlStatus = 'queued' | 'discovering' | 'crawling' | 'indexing' | 'ready';

type DemoPage = {
  id: string;
  tenantId: string;
  sourceId: string;
  url: string;
  canonicalUrl: string;
  title: string;
  status: 'discovered' | 'fetching' | 'indexed';
  includeInAnswers: boolean;
  httpStatus: number;
  contentType: string;
  contentLength: number;
  wordCount: number;
  chunkCount: number;
  excerpt: string;
  knowledgeItemIds: string[];
  discoveredAt: number;
  crawledAt?: number;
  updatedAt: number;
};

type DemoSource = {
  id: string;
  tenantId: string;
  seedUrl: string;
  displayName: string;
  status: CrawlStatus;
  provider: 'native';
  crawlMode: CrawlMode;
  requestedLimit: number;
  discoveredCount: number;
  crawledCount: number;
  indexedCount: number;
  chunkCount: number;
  embeddingsReadyCount: number;
  embeddingsPendingCount: number;
  embeddingsFailedCount: number;
  failedCount: number;
  excludedCount: number;
  jobId?: string;
  lastCrawledAt?: number;
  createdAt: number;
  updatedAt: number;
  pages: DemoPage[];
};

type DemoJob = {
  id: string;
  tenantId: string;
  sourceIds: string[];
  processedCount: number;
  maxPages: number;
  status: 'running' | 'success';
};

type DemoCrawlerState = { sources: DemoSource[]; jobs: DemoJob[] };

const STORAGE_KEY = 'antbuildz-console-crawler-demo-v1';
const FETCH_MARKER = '__antbuildzConsoleCrawlerFetchInstalled';
const PAGE_PATHS = ['', '/products', '/contact'];

function id(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function readState(): DemoCrawlerState {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '{}') as Partial<DemoCrawlerState>;
    return { sources: Array.isArray(parsed.sources) ? parsed.sources : [], jobs: Array.isArray(parsed.jobs) ? parsed.jobs : [] };
  } catch {
    return { sources: [], jobs: [] };
  }
}

function saveState(state: DemoCrawlerState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}

function requestBody(init?: RequestInit) {
  if (typeof init?.body !== 'string') return {};
  try { return JSON.parse(init.body) as Record<string, unknown>; } catch { return {}; }
}

function makePages(sourceId: string, tenantId: string, seedUrl: string, now: number): DemoPage[] {
  const base = new URL(seedUrl);
  return PAGE_PATHS.map((path, index) => {
    const url = new URL(path || '/', base).href;
    const suffix = index === 0 ? 'Home' : index === 1 ? 'Products' : 'Contact';
    return {
      id: `${sourceId}-page-${index + 1}`,
      tenantId,
      sourceId,
      url,
      canonicalUrl: url,
      title: `${base.hostname} — ${suffix} (local demo)`,
      status: 'discovered',
      includeInAnswers: true,
      httpStatus: 200,
      contentType: 'text/html',
      contentLength: 642 + index * 87,
      wordCount: 96 + index * 19,
      chunkCount: 1,
      excerpt: `Local demo page generated for ${base.hostname}. No live website content was requested or stored.`,
      knowledgeItemIds: [`${sourceId}-knowledge-${index + 1}`],
      discoveredAt: now,
      updatedAt: now,
    };
  });
}

function sourceForResponse(source: DemoSource) {
  // The Console validates the required public fields and safely ignores this
  // local-only page cache when rendering the source list.
  return source;
}

function progressJob(state: DemoCrawlerState, jobId: string) {
  const job = state.jobs.find((candidate) => candidate.id === jobId);
  if (!job || job.status === 'success') return job;
  job.processedCount = Math.min(job.processedCount + 1, job.maxPages);
  const timestamp = Date.now();
  const source = state.sources.find((candidate) => candidate.jobId === job.id && candidate.crawledCount < candidate.pages.length);
  if (source) {
    source.status = 'crawling';
    source.crawledCount += 1;
    source.indexedCount = source.crawledCount;
    source.chunkCount = source.crawledCount;
    source.embeddingsReadyCount = source.crawledCount;
    source.embeddingsPendingCount = Math.max(0, source.pages.length - source.crawledCount);
    source.updatedAt = timestamp;
    const page = source.pages[source.crawledCount - 1];
    if (page) {
      page.status = 'indexed';
      page.crawledAt = timestamp;
      page.updatedAt = timestamp;
    }
  }
  if (job.processedCount >= job.maxPages) {
    job.status = 'success';
    state.sources.filter((candidate) => candidate.jobId === job.id).forEach((item) => {
      item.status = 'ready';
      item.lastCrawledAt = timestamp;
      item.updatedAt = timestamp;
      item.embeddingsPendingCount = 0;
    });
  }
  return job;
}

function handleCrawlerRequest(url: URL, method: string, init?: RequestInit) {
  const state = readState();
  const body = requestBody(init);
  const tenantId = String(body.tenantId ?? url.searchParams.get('tenantId') ?? 'sembang-sg');
  const path = url.pathname;

  if (path === '/api/knowledge/ingest-website' && method === 'POST') {
    const urls = Array.isArray(body.urls) ? body.urls.filter((value): value is string => typeof value === 'string') : [];
    const crawlLimit = Math.max(1, Number(body.crawlLimit) || 25);
    const crawlMode: CrawlMode = body.crawlMode === 'sitemap' || body.crawlMode === 'links' ? body.crawlMode : 'balanced';
    if (!urls.length) return json({ error: 'Add at least one website URL.' }, 400);
    const jobId = id('demo-crawl');
    const now = Date.now();
    const sources = urls.map((seedUrl) => {
      let parsed: URL;
      try { parsed = new URL(seedUrl); } catch { throw new Error(`Invalid website URL: ${seedUrl}`); }
      const sourceId = id('demo-site');
      const pages = makePages(sourceId, tenantId, parsed.href, now);
      const source: DemoSource = {
        id: sourceId, tenantId, seedUrl: parsed.href, displayName: `${parsed.hostname} (local demo)`, status: 'queued', provider: 'native', crawlMode,
        requestedLimit: crawlLimit, discoveredCount: pages.length, crawledCount: 0, indexedCount: 0, chunkCount: 0,
        embeddingsReadyCount: 0, embeddingsPendingCount: pages.length, embeddingsFailedCount: 0, failedCount: 0, excludedCount: 0,
        jobId, createdAt: now, updatedAt: now, pages,
      };
      state.sources = state.sources.filter((existing) => existing.seedUrl !== source.seedUrl || existing.tenantId !== tenantId);
      state.sources.push(source);
      return source;
    });
    state.jobs.push({ id: jobId, tenantId, sourceIds: sources.map((source) => source.id), processedCount: 0, maxPages: sources.reduce((total, source) => total + source.pages.length, 0), status: 'running' });
    saveState(state);
    return json({ jobId, jobType: 'website-crawl', mode: 'async', queue: { name: 'local-browser-demo', state: 'queued', retryCount: 0, maxAttempts: 1 } });
  }

  if (path === '/api/knowledge/ingest-website/process' && method === 'POST') {
    state.jobs.filter((job) => job.tenantId === tenantId && job.status === 'running').forEach((job) => progressJob(state, job.id));
    saveState(state);
    return json({ scanned: 1, processed: 1, retried: 0, failed: 0, deadLettered: 0 });
  }

  if (path === '/api/knowledge/ingest-website/progress' && method === 'POST') {
    const job = state.jobs.find((candidate) => candidate.id === body.jobId && candidate.tenantId === tenantId);
    if (!job) return json({ error: 'Crawl job not found.' }, 404);
    const activeSource = state.sources.find((source) => source.jobId === job.id && source.status !== 'ready');
    return json({
      id: job.id,
      status: job.status,
      processedCount: job.processedCount,
      metadata: {
        progressCurrentPages: job.processedCount,
        progressMaxPages: job.maxPages,
        progressIndexedPages: state.sources.filter((source) => source.jobId === job.id).reduce((total, source) => total + source.indexedCount, 0),
        progressCurrentUrl: activeSource?.seedUrl ?? state.sources.find((source) => source.jobId === job.id)?.seedUrl ?? '',
        demoMode: true,
      },
    });
  }

  if (path === '/api/knowledge/websites' && method === 'GET') {
    return json({ sources: state.sources.filter((source) => source.tenantId === tenantId).map(sourceForResponse) });
  }

  const match = path.match(/^\/api\/knowledge\/websites\/([^/]+)(?:\/pages(?:\/([^/]+))?)?$/);
  if (!match) return null;
  const [, sourceId, pageId] = match.map((value) => value ? decodeURIComponent(value) : value);
  const source = state.sources.find((candidate) => candidate.id === sourceId && candidate.tenantId === tenantId);
  if (!source) return json({ error: 'Website source not found.' }, 404);

  if (method === 'DELETE' && !pageId) {
    state.sources = state.sources.filter((candidate) => candidate.id !== source.id);
    state.jobs = state.jobs.filter((job) => !job.sourceIds.includes(source.id));
    saveState(state);
    return json({ deleted: true, sourceId: source.id });
  }

  if (method === 'GET' && !pageId) {
    const query = url.searchParams.get('query')?.trim().toLowerCase();
    const items = source.pages.filter((page) => !query || `${page.title} ${page.url}`.toLowerCase().includes(query));
    return json({ source: sourceForResponse(source), items, total: items.length, offset: 0, limit: Number(url.searchParams.get('limit')) || 50 });
  }

  if (method === 'PATCH' && !pageId) {
    const page = source.pages.find((candidate) => candidate.id === body.pageId);
    if (!page) return json({ error: 'Website page not found.' }, 404);
    page.includeInAnswers = Boolean(body.includeInAnswers);
    page.updatedAt = Date.now();
    saveState(state);
    return json({ page });
  }

  if (method === 'GET' && pageId) {
    const page = source.pages.find((candidate) => candidate.id === pageId);
    if (!page) return json({ error: 'Website page not found.' }, 404);
    return json({ page, chunks: [{ id: `${page.id}-chunk-1`, title: page.title, content: page.excerpt, sourceUrl: page.url, enabled: page.includeInAnswers, chunkIndex: 0, headingPath: [page.title], tokenCount: 38, updatedAt: page.updatedAt }], totalChunks: 1, offset: 0, limit: 20 });
  }

  return null;
}

/** Adds the reference Console's crawler API locally, without network crawling. */
export function installConsoleCrawlerDemo() {
  if (typeof window === 'undefined' || (window as typeof window & Record<string, unknown>)[FETCH_MARKER]) return;
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const rawUrl = typeof input === 'string' || input instanceof URL ? input.toString() : input.url;
    const url = new URL(rawUrl, window.location.origin);
    if (!url.pathname.startsWith('/api/knowledge/')) return originalFetch(input, init);
    const method = (init?.method ?? (input instanceof Request ? input.method : 'GET')).toUpperCase();
    try {
      const response = handleCrawlerRequest(url, method, init);
      if (response) return response;
    } catch (error) {
      return json({ error: error instanceof Error ? error.message : 'Unable to prepare the local crawl.' }, 400);
    }
    return originalFetch(input, init);
  };
  (window as typeof window & Record<string, unknown>)[FETCH_MARKER] = true;
}
