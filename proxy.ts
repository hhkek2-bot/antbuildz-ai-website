import { NextResponse, type NextRequest } from 'next/server';

const STAGING_HOSTS = new Set(['develop.antbuildz.ai']);

function requestHostname(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
  return (forwardedHost || request.headers.get('host') || request.nextUrl.hostname)
    .split(':')[0]
    .toLowerCase();
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Leave staging crawlable so search engines can receive `noindex` and remove
  // URLs that were indexed before this protection was added.
  if (STAGING_HOSTS.has(requestHostname(request))) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};
