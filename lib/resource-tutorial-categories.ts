/** Shared Resources navigation: menu, library and tutorial hub use the same destinations. */
export const RESOURCE_LEARNING_LABELS: Record<string,string> = {
  'Understand Antbuildz AI Agent':'AI Agent essentials',
  'How Webstore Supports the AI Agent':'AI Agent & Webstore',
  'Antbuildz AI Agent + Webstore':'AI Agent & Webstore',
  'Why Antbuildz AI Agent Is Different':'What makes Antbuildz different',
  'Getting Ready for Antbuildz AI Agent':'Before you start',
  'AI Agent Console Features — Your Command Centre':'Console feature guides',
  'AI Console Features — Your Command Centre':'Console feature guides',
};

export const RESOURCE_TUTORIAL_CATEGORIES = [
  { id:'subscription',label:'Sign-up & subscription',stage:'Subscribe',description:'Choose a package, create your account and prepare payment.',href:'/resources/getting-started#subscription' },
  { id:'agent-setup',label:'Agent setup & knowledge',stage:'Set up your agent',description:'Set up your company and agent, add knowledge, test and launch.',href:'/resources/getting-started#agent-setup' },
  { id:'products-webstore',label:'Products & webstore',stage:'Prepare your webstore',description:'Prepare products, check inventory and set up your webstore.',href:'/resources/getting-started#products-webstore' },
  { id:'usage-troubleshooting',label:'Usage & troubleshooting',stage:'Usage & troubleshooting',description:'Understand credits and resolve common onboarding problems.',href:'/resources/getting-started#usage-troubleshooting' },
] as const;
