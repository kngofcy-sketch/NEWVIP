import { useState } from 'react';
import { Check, Loader as Loader2, ArrowRight, Star } from 'lucide-react';
import { StripeProduct } from '../stripe-config';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  product: StripeProduct;
}

export default function PricingCard({ product }: PricingCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            priceId: product.priceId,
            mode: product.mode,
            successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: `${window.location.origin}/`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        product.highlight
          ? 'border-amber-400/60 bg-gradient-to-b from-amber-950/30 to-stone-900/80 shadow-xl shadow-amber-500/10'
          : 'border-white/10 bg-white/5 hover:border-white/20'
      }`}
    >
      {product.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            <Star className="w-3 h-3 fill-black" />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className={`text-lg font-bold mb-2 ${product.highlight ? 'text-amber-300' : 'text-white'}`}>
            {product.name}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">{product.description}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-end gap-1">
            <span className={`text-4xl font-bold ${product.highlight ? 'text-amber-300' : 'text-white'}`}>
              {product.currencySymbol}{product.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </div>
          <p className="text-white/40 text-xs mt-1">One-time payment</p>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                product.highlight ? 'bg-amber-400/20' : 'bg-white/10'
              }`}>
                <Check className={`w-2.5 h-2.5 ${product.highlight ? 'text-amber-400' : 'text-white/60'}`} />
              </div>
              <span className="text-white/60 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {error && (
          <p className="text-red-400 text-xs mb-3 text-center">{error}</p>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
            product.highlight
              ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30'
              : 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20'
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Get Started
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}