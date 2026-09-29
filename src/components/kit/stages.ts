// The seven stages every business shares, as drawn in the kit illustrations (Figma file
// "AI Foundation Kit: illustrations"). The examples are illustrative, never a real company's process.
export type StageType = 'mechanical' | 'hybrid' | 'judgment';

export const typeLabel: Record<StageType, string> = {
  mechanical: 'Mechanical',
  hybrid: 'Hybrid',
  judgment: 'Judgment',
};

export const typeMeaning: Record<StageType, string> = {
  mechanical: 'AI can run it',
  hybrid: 'AI drafts, you sign off',
  judgment: 'Stays with a person',
};

export const stages: { type: StageType; name: string; note: string }[] = [
  { type: 'hybrid', name: 'Request comes in', note: 'Log it, check the basics' },
  { type: 'judgment', name: 'Qualify', note: 'Is this work we want?' },
  { type: 'hybrid', name: 'Scope', note: 'What exactly is the job?' },
  { type: 'hybrid', name: 'Price', note: 'What will it cost and earn?' },
  { type: 'mechanical', name: 'Commit', note: 'Signed, deposit in' },
  { type: 'judgment', name: 'Deliver', note: 'Do the work well' },
  { type: 'mechanical', name: 'Get paid', note: 'Bill, collect, follow up' },
];

// One example per stage, in stage order.
export const businesses: { id: string; label: string; examples: string[] }[] = [
  {
    id: 'trades',
    label: 'Home services and trades',
    examples: ['A quote request by email', 'A site visit', 'Measurements and photos', 'An estimate', 'A signed quote and deposit', 'Build and install', 'The final invoice'],
  },
  {
    id: 'salon',
    label: 'Salon or studio',
    examples: ['A booking request', 'A consultation', 'Hair history and goals', 'The service menu and add-ons', 'A booking deposit', 'The appointment', 'Checkout and rebooking'],
  },
  {
    id: 'services',
    label: 'Professional services',
    examples: ['An inquiry from a referral', 'A discovery call', 'A draft scope of work', 'A proposal', 'A signed engagement letter', 'The engagement', 'Monthly invoices'],
  },
  {
    id: 'shop',
    label: 'Online shop',
    examples: ['An order', 'A fraud and stock check', 'Custom options confirmed', 'Shipping and discounts', 'Payment captured', 'Pick, pack and ship', 'Payout and returns'],
  },
  {
    id: 'deals',
    label: 'Real estate and deals',
    examples: ['A new lead or listing', 'A first look at the numbers', 'A due diligence list', 'An offer', 'A signed contract and earnest money', 'Diligence to closing', 'Commission or distribution'],
  },
];
