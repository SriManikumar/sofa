import { trustSignals } from "@/data/site";

export function TrustSignals({ variant = "default" }: { variant?: "default" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-cream/80">
        {trustSignals.map((item) => (
          <span key={item.label}>
            <strong className="text-cream">{item.label}</strong> {item.detail}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {trustSignals.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border bg-white px-4 py-5 text-center"
        >
          <p className="font-display text-lg font-semibold text-brown">{item.label}</p>
          <p className="mt-1 text-xs text-muted">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
