"use client";

import { useState } from "react";

export function ContactForm({ defaultOrderType = "" }: { defaultOrderType?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-2xl text-accent">
          ✓
        </div>
        <h3 className="font-display mt-4 text-xl font-semibold text-brown">
          Order request received
        </h3>
        <p className="mt-2 text-sm text-muted">
          Thank you! Our team will review your custom requirements and contact
          you within 24 hours with a quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <p className="mb-6 rounded-lg bg-cream-dark px-4 py-3 text-sm text-brown-light">
        <strong className="text-brown">Custom orders welcome.</strong> Tell us
        your dimensions, fabric preference, recliner type, quantity, and
        delivery location — we&apos;ll prepare a personalized quote.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brown">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brown">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="+91 ..."
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-brown">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="you@email.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="orderType" className="block text-sm font-medium text-brown">
            Order type *
          </label>
          <select
            id="orderType"
            name="orderType"
            required
            defaultValue={defaultOrderType}
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            <option value="">Select order type</option>
            <option value="custom-sofa">Custom sofa (made to measure)</option>
            <option value="custom-recliner">Custom recliner</option>
            <option value="recliner">Ready-made recliner</option>
            <option value="sofa">Ready-made sofa</option>
            <option value="sectional">Sectional / L-shape</option>
            <option value="bulk">Bulk / commercial order</option>
          </select>
        </div>

        <div>
          <label htmlFor="reclinerType" className="block text-sm font-medium text-brown">
            Recliner type (if applicable)
          </label>
          <select
            id="reclinerType"
            name="reclinerType"
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            <option value="">Not applicable</option>
            <option value="manual">Manual recliner</option>
            <option value="rocker">Rocker recliner</option>
            <option value="dual">Dual recliner sofa</option>
            <option value="single">Single recliner chair</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-brown">
            Quantity *
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min={1}
            defaultValue={1}
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="dimensions" className="block text-sm font-medium text-brown">
            Dimensions (L × W × H)
          </label>
          <input
            id="dimensions"
            name="dimensions"
            type="text"
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="e.g. 7 ft × 3 ft × 34 in"
          />
        </div>
        <div>
          <label htmlFor="fabric" className="block text-sm font-medium text-brown">
            Fabric / material preference
          </label>
          <input
            id="fabric"
            name="fabric"
            type="text"
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Leatherette, cotton, velvet..."
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="delivery" className="block text-sm font-medium text-brown">
            Delivery location *
          </label>
          <input
            id="delivery"
            name="delivery"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="City, area, pin code"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-brown">
            Additional details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1.5 w-full resize-none rounded-lg border border-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Room photos, color preferences, budget range, preferred delivery date..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:w-auto sm:px-10"
      >
        Submit custom order request
      </button>
    </form>
  );
}
