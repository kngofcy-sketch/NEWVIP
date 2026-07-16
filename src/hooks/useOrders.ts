import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { UserOrder } from '../types';
import { STRIPE_PRODUCTS } from '../stripe-config';

export function useOrders(userId: string | undefined) {
  const [orders, setOrders] = useState<UserOrder[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      setOrders([]);
      return;
    }

    setLoading(true);
    supabase
      .from('stripe_user_orders')
      .select('*')
      .eq('order_status', 'completed')
      .then(({ data }) => {
        setOrders(data ?? []);
        setLoading(false);
      });
  }, [userId]);

  const getPurchasedProductName = (): string | null => {
    if (!orders.length) return null;
    const latestOrder = orders[orders.length - 1];
    if (!latestOrder.amount_total) return null;
    const amountInDollars = latestOrder.amount_total / 100;
    const product = STRIPE_PRODUCTS.find(
      (p) => Math.abs(p.price - amountInDollars) < 0.01
    );
    return product?.name ?? 'Premium Package';
  };

  return { orders, loading, getPurchasedProductName };
}