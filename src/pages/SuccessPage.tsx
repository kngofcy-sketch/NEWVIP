import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CircleCheck as CheckCircle2, Crown, ArrowLeft, Loader as Loader2 } from 'lucide-react';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div
        className={`max-w-md w-full text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Icon */}
        <div className="relative inline-flex mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-amber-400" />
          </div>
          <div className="absolute inset-0 rounded-full bg-amber-400/10 animate-ping" />
        </div>

        {/* Content */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-3">Payment Successful!</h1>
          <p className="text-white/50 leading-relaxed">
            Thank you for your purchase. Your order has been confirmed and our team will be in touch within 24 hours to get started.
          </p>

          {sessionId && (
            <div className="mt-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 inline-block">
              <p className="text-white/30 text-xs">
                Session ID: <span className="text-white/50 font-mono">{sessionId.slice(0, 24)}...</span>
              </p>
            </div>
          )}
        </div>

        {/* What's next */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-400" />
            What happens next?
          </h3>
          <ul className="space-y-3">
            {[
              'Check your email for a purchase confirmation',
              'Our creative team reviews your order',
              'We reach out within 24 hours to begin onboarding',
              'Your project kicks off!',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-white/60 text-sm">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to services
        </Link>
      </div>
    </div>
  );
}