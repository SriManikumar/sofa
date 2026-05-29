type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}
