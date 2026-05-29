"use client";

import { useState, useEffect } from "react";
import { PageHero } from "@/components/PageHero";

type Order = {
  id: number;
  timestamp: string;
  status: "pending" | "quoted" | "completed";
  name: string;
  email: string;
  phone: string;
  orderType: string;
  reclinerType?: string;
  quantity?: string;
  dimensions?: string;
  fabric?: string;
  delivery?: string;
  message?: string;
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [filter, setFilter] = useState<"all" | "pending" | "quoted" | "completed">("all");

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "1234";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      fetchOrders();
      setPassword("");
    } else {
      alert("Invalid password");
      setPassword("");
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    try {
      // For now, orders are stored in Netlify Functions logs
      // In production, fetch from Supabase or your database
      console.log("📥 Fetching orders...");
      // Placeholder - will connect to real database
      setOrders([]);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: number, newStatus: Order["status"]) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const filteredOrders = orders.filter(
    (order) => filter === "all" || order.status === filter
  );

  if (!authenticated) {
    return (
      <>
        <PageHero
          eyebrow="Business"
          title="Order Management"
          description="Admin access required"
        />
        <div className="mx-auto max-w-md px-4 py-20">
          <form
            onSubmit={handleLogin}
            className="rounded-2xl border border-border bg-white p-8 shadow-sm"
          >
            <h2 className="font-display text-xl font-semibold text-brown mb-6">
              Admin Login
            </h2>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-brown mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Enter password"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-charcoal py-2.5 text-sm font-medium text-cream transition-colors hover:bg-brown-light"
            >
              Login
            </button>
          </form>

          <div className="mt-6 rounded-lg border border-gold/30 bg-champagne/50 p-4 text-sm text-muted">
            <p>
              <strong>📧 Orders received:</strong> Check Netlify Functions logs in your dashboard
            </p>
            <p className="mt-2">
              <strong>⚠️ Current status:</strong> Orders are stored in Netlify logs. To enable persistent storage, set up Supabase or Firebase.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Business"
        title="Order Management"
        description={`${filteredOrders.length} orders • ${orders.filter((o) => o.status === "pending").length} pending`}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 flex-wrap">
            {(["all", "pending", "quoted", "completed"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === status
                    ? "bg-charcoal text-cream"
                    : "bg-cream border border-border text-charcoal hover:bg-cream-dark"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="px-4 py-2 text-sm text-muted hover:text-charcoal"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted">Loading orders...</p>
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="rounded-2xl border border-border/50 bg-cream-dark p-12 text-center">
            <p className="text-muted">No orders yet</p>
            <p className="text-sm text-muted/60 mt-2">
              Orders will appear here once customers submit the contact form
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-xl border border-border bg-white p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() =>
                  setSelectedOrder(selectedOrder?.id === order.id ? null : order)
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-semibold text-charcoal truncate">
                        {order.name}
                      </h3>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          order.status === "pending"
                            ? "bg-amber-100 text-amber-800"
                            : order.status === "quoted"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted mb-1">
                      <strong>Order:</strong> {order.orderType}
                    </p>
                    <p className="text-sm text-muted">
                      <strong>Contact:</strong> {order.phone} • {order.email}
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted/60 flex-shrink-0">
                    {new Date(order.timestamp).toLocaleDateString()}
                  </div>
                </div>

                {selectedOrder?.id === order.id && (
                  <div className="mt-4 border-t border-border/50 pt-4 space-y-3">
                    {order.dimensions && (
                      <p className="text-sm">
                        <strong>Dimensions:</strong> {order.dimensions}
                      </p>
                    )}
                    {order.quantity && (
                      <p className="text-sm">
                        <strong>Quantity:</strong> {order.quantity}
                      </p>
                    )}
                    {order.fabric && (
                      <p className="text-sm">
                        <strong>Fabric:</strong> {order.fabric}
                      </p>
                    )}
                    {order.delivery && (
                      <p className="text-sm">
                        <strong>Delivery:</strong> {order.delivery}
                      </p>
                    )}
                    {order.message && (
                      <p className="text-sm">
                        <strong>Message:</strong> {order.message}
                      </p>
                    )}

                    <div className="flex gap-2 pt-3 border-t border-border/30">
                      {(["pending", "quoted", "completed"] as const).map((status) => (
                        <button
                          key={status}
                          onClick={(e) => {
                            e.stopPropagation();
                            updateOrderStatus(order.id, status);
                          }}
                          className={`flex-1 px-3 py-2 rounded text-xs font-medium transition-colors ${
                            order.status === status
                              ? "bg-charcoal text-cream"
                              : "bg-cream border border-border text-charcoal hover:bg-cream-dark"
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-xl border border-gold/30 bg-champagne/50 p-6">
          <h3 className="font-display font-semibold text-charcoal mb-2">
            🚀 Next Steps
          </h3>
          <ol className="space-y-2 text-sm text-muted">
            <li>
              <strong>1. Email Setup:</strong> Get a{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Resend
              </a>{" "}
              API key and add it to Netlify env variables
            </li>
            <li>
              <strong>2. Database:</strong> Set up{" "}
              <a
                href="https://supabase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Supabase
              </a>{" "}
              to persist orders
            </li>
            <li>
              <strong>3. Connect:</strong> Update the Netlify Function to use your database
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
