type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="hero-gradient relative overflow-hidden text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--gold-light) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-[0.25em] text-gold-light uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/75">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
