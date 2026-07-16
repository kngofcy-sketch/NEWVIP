import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, LogOut, LogIn, Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useOrders } from '../hooks/useOrders';

export default function Header() {
  const { user, loading, signOut } = useAuth();
  const { getPurchasedProductName } = useOrders(user?.id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const purchasedPlan = user ? getPurchasedProductName() : null;

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

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

          <div className="hidden md:flex items-center gap-4">
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-4">
                    {purchasedPlan && (
                      <div className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-3 py-1">
                        <Crown className="w-3 h-3 text-amber-400" />
                        <span className="text-amber-400 text-xs font-medium">{purchasedPlan}</span>
                      </div>
                    )}
                    <span className="text-white/50 text-sm">{user.email}</span>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    Sign in
                  </Link>
                )}
              </>
            )}
          </div>

          <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-4 py-4">
          {user ? (
            <div className="space-y-3">
              {purchasedPlan && (
                <div className="flex items-center gap-2 text-amber-400 text-sm">
                  <Crown className="w-3 h-3" />
                  <span>{purchasedPlan}</span>
                </div>
              )}
              <p className="text-white/50 text-sm">{user.email}</p>
              <button onClick={handleSignOut} className="flex items-center gap-2 text-white/60 text-sm">
                <LogOut className="w-4 h-4" /> Sign out
              </button>
            </div>
          ) : (
            <Link to="/auth" className="flex items-center gap-2 text-white text-sm" onClick={() => setMobileOpen(false)}>
              <LogIn className="w-4 h-4" /> Sign in
            </Link>
          )}
        </div>
      )}
    </header>
  );
}