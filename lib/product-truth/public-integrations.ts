export const PUBLIC_INTEGRATION_STATES = [
  'implemented', 'setup-required', 'evidence-required', 'planned', 'infrastructure',
] as const;

export type PublicIntegrationState = (typeof PUBLIC_INTEGRATION_STATES)[number];
export type PublicIntegration = {
  id: string;
  name: string;
  state: PublicIntegrationState;
  evidenceRef: string | null;
  note: string;
};

/** Display metadata only. This repository contains no integration credentials or connectors. */
export const PUBLIC_INTEGRATIONS: readonly PublicIntegration[] = [
  { id: 'shopify', name: 'Shopify', state: 'implemented', evidenceRef: null, note: 'Interface preview only; no store connection is included.' },
  { id: 'whatsapp', name: 'WhatsApp', state: 'evidence-required', evidenceRef: null, note: 'No live connection is included.' },
  { id: 'instagram', name: 'Instagram', state: 'evidence-required', evidenceRef: null, note: 'No live connection is included.' },
  { id: 'telegram', name: 'Telegram', state: 'planned', evidenceRef: null, note: 'Roadmap illustration only.' },
  { id: 'zapier', name: 'Zapier', state: 'planned', evidenceRef: null, note: 'Roadmap illustration only.' },
  { id: 'make', name: 'Make', state: 'planned', evidenceRef: null, note: 'Roadmap illustration only.' },
  { id: 'n8n', name: 'n8n', state: 'setup-required', evidenceRef: null, note: 'No workflow or connection is included.' },
  { id: 'groq', name: 'Groq', state: 'infrastructure', evidenceRef: null, note: 'Technology reference only.' },
  { id: 'openrouter', name: 'OpenRouter', state: 'infrastructure', evidenceRef: null, note: 'Technology reference only.' },
  { id: 'notion', name: 'Notion', state: 'planned', evidenceRef: null, note: 'Roadmap illustration only.' },
  { id: 'hubspot', name: 'HubSpot', state: 'setup-required', evidenceRef: null, note: 'No live connection is included.' },
  { id: 'supabase', name: 'Supabase', state: 'infrastructure', evidenceRef: null, note: 'Technology reference only.' },
];

export function findPublicIntegration(id: string): PublicIntegration | undefined {
  return PUBLIC_INTEGRATIONS.find((integration) => integration.id === id);
}
