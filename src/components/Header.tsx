import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Crown className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">KingdomConnect<span className="text-amber-400">VIP</span></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
