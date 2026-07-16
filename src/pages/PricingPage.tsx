import { Crown, Zap, Shield } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import { STRIPE_PRODUCTS } from '../stripe-config';

const TRUST_ITEMS = [
  { icon: Shield, label: 'Secure payments via Stripe' },
  { icon: Zap, label: 'Instant delivery after purchase' },
  { icon: Crown, label: '100% satisfaction guaranteed' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-6">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">Creative Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            Elevate Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Creative Vision
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Professional branding, marketing, and production services tailored for artists who demand excellence.
          </p>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-14">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/40 text-sm">
              <Icon className="w-4 h-4 text-amber-400/70" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {STRIPE_PRODUCTS.map((product) => (
            <PricingCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/30 text-sm mt-12">
          All packages are one-time payments. No recurring charges. Questions?{' '}
          <a href="mailto:support@kingdomconnectvip.com" className="text-amber-400/70 hover:text-amber-400 transition-colors">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}