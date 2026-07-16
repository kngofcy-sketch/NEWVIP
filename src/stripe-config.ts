export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  currencySymbol: string;
  currency: string;
  mode: 'payment' | 'subscription';
  features: string[];
  highlight?: boolean;
}

export const STRIPE_PRODUCTS: StripeProduct[] = [
  {
    id: 'prod_UtebUfs8A3kHc4',
    priceId: 'price_1TtrHxPq8l8hxBJi4J0bSpZs',
    name: 'Basic Concept',
    description: 'Lay the creative foundation for your brand with essential concept development.',
    price: 99.99,
    currencySymbol: '$',
    currency: 'usd',
    mode: 'payment',
    features: [
      'Initial concept development',
      'Basic visual direction',
      'One revision round',
      'Digital file delivery',
    ],
  },
  {
    id: 'prod_Uteci9I7CoAZU5',
    priceId: 'price_1TtrJ9Pq8l8hxBJiXNq7q7pM',
    name: 'Community Marketing',
    description: 'Build and engage your audience with a targeted marketing strategy.',
    price: 149.99,
    currencySymbol: '$',
    currency: 'usd',
    mode: 'payment',
    features: [
      'Social media strategy',
      'Community engagement plan',
      '30-day content calendar',
      'Performance analytics overview',
    ],
  },
  {
    id: 'prod_Utecgg2tVHsWfE',
    priceId: 'price_1TtrJgPq8l8hxBJiBNQMAo2p',
    name: 'Essential Logo Package',
    description: 'Define your artistic identity with a professional logo and brand assets.',
    price: 249.99,
    currencySymbol: '$',
    currency: 'usd',
    mode: 'payment',
    features: [
      'Custom logo design',
      'Brand color palette',
      'Typography selection',
      'Multiple file formats (SVG, PNG, PDF)',
      'Two revision rounds',
    ],
  },
  {
    id: 'prod_UtedALPHSnJTtW',
    priceId: 'price_1TtrK6Pq8l8hxBJinP5lqLMi',
    name: 'Pro Brand Identity',
    description: 'A complete brand system engineered for serious artists ready to stand out.',
    price: 749.99,
    currencySymbol: '$',
    currency: 'usd',
    mode: 'payment',
    highlight: true,
    features: [
      'Full brand identity system',
      'Logo suite (primary + variants)',
      'Brand guidelines document',
      'Social media templates (6 formats)',
      'Press kit design',
      'Three revision rounds',
    ],
  },
  {
    id: 'prod_Utedlo09OpOazy',
    priceId: 'price_1TtrKXPq8l8hxBJiUsNSigmN',
    name: 'Elite Production & Strategy',
    description: 'The complete creative powerhouse package for top-tier talent and serious careers.',
    price: 1499.99,
    currencySymbol: '$',
    currency: 'usd',
    mode: 'payment',
    features: [
      'Everything in Pro Brand Identity',
      'Music production consultation',
      'Full marketing strategy roadmap',
      'Artist development plan',
      'Priority support (48h response)',
      'Unlimited revisions',
      'Dedicated creative director',
    ],
  },
];