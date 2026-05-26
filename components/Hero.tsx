export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ background:"radial-gradient(ellipse at top, #1d3a6e 0%, #111827 55%, #111827 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize:"60px 60px", opacity:0.03 }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <div className="inline-flex items-center mb-5" style={{ animation:"fadeInUp 0.7s ease forwards", animationDelay:"0s", opacity:0 }}>
          <span className="bg-sewell-orange text-white text-sm font-semibold font-display uppercase tracking-widest px-5 py-2 rounded-full">Kevin Sewell</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15] mb-5" style={{ animation:"fadeInUp 0.7s ease forwards", animationDelay:"0.1s", opacity:0 }}>
          28 years building production systems for enterprise clients —{" "}
          <span className="text-sewell-orange">now applying that foundation</span>{" "}
          to AI-integrated platforms that actually work the way businesses need them to.
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8" style={{ animation:"fadeInUp 0.7s ease forwards", animationDelay:"0.2s", opacity:0 }}>
          Available for select client engagements.
        </p>
        <div style={{ animation:"fadeInUp 0.7s ease forwards", animationDelay:"0.3s", opacity:0 }}>
          <a href="#contact" className="inline-flex items-center gap-2 bg-sewell-orange hover:bg-amber-500 text-white font-display font-semibold px-8 py-3 rounded-full transition-all duration-200 text-base">
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
