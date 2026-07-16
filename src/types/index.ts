export interface UserOrder {
  customer_id: string | null;
  order_id: number | null;
  checkout_session_id: string | null;
  payment_intent_id: string | null;
  amount_subtotal: number | null;
  amount_total: number | null;
  currency: string | null;
  payment_status: string | null;
  order_status: string | null;
  order_date: string | null;
}