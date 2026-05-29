// Client-side storage helper for orders
export const ordersStorage = {
  get: () => {
    try {
      const stored = localStorage.getItem('sofa_orders');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading orders from localStorage:', error);
      return [];
    }
  },

  save: (orders: any[]) => {
    try {
      localStorage.setItem('sofa_orders', JSON.stringify(orders));
    } catch (error) {
      console.error('Error saving orders to localStorage:', error);
    }
  },

  add: (order: any) => {
    const orders = ordersStorage.get();
    const newOrders = [order, ...orders];
    ordersStorage.save(newOrders);
    return newOrders;
  },

  update: (orderId: number, updates: any) => {
    const orders = ordersStorage.get();
    const updated = orders.map(o => o.id === orderId ? { ...o, ...updates } : o);
    ordersStorage.save(updated);
    return updated;
  },

  clear: () => {
    localStorage.removeItem('sofa_orders');
  },
};
