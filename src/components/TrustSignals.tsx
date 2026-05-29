import { trustSignals } from "@/data/site";

export function TrustSignals({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-cream/80">
        {trustSignals.map((item) => (
          <span key={item.label} className="text-center sm:text-left">
            <strong className="text-gold-light">{item.label}</strong>
            <span className="text-cream/60"> · {item.detail}</span>
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
          className="card-lift rounded-2xl border border-border/80 bg-white px-4 py-6 text-center shadow-sm"
        >
          <p className="font-display text-base font-semibold text-charcoal sm:text-lg">
            {item.label}
          </p>
          <p className="mt-1.5 text-xs text-muted">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
