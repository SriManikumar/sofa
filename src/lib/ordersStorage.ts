// Client-side storage helper for orders
export const ordersStorage = {
  get: () => {
    try {
      const stored = localStorage.getItem('sofa_orders');
      const parsed = stored ? JSON.parse(stored) : [];
      console.log("📖 Reading from localStorage - found", parsed.length, "orders");
      return parsed;
    } catch (error) {
      console.error('❌ Error reading orders from localStorage:', error);
      return [];
    }
  },

  save: (orders: any[]) => {
    try {
      console.log("💾 Saving", orders.length, "orders to localStorage");
      localStorage.setItem('sofa_orders', JSON.stringify(orders));
    } catch (error) {
      console.error('❌ Error saving orders to localStorage:', error);
    }
  },

  add: (order: any) => {
    console.log("➕ Adding order:", order.name);
    const orders = ordersStorage.get();
    const newOrders = [order, ...orders];
    ordersStorage.save(newOrders);
    return newOrders;
  },

  update: (orderId: number, updates: any) => {
    console.log("✏️ Updating order #" + orderId);
    const orders = ordersStorage.get();
    const updated = orders.map(o => o.id === orderId ? { ...o, ...updates } : o);
    ordersStorage.save(updated);
    return updated;
  },

  clear: () => {
    console.log("🗑️ Clearing all orders");
    localStorage.removeItem('sofa_orders');
  },
};
