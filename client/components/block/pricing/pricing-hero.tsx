import React from 'react';

const PricingHero = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 text-center mb-24 relative z-10 pt-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">Global Infrastructure Live</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter silver-gradient mb-6 font-headline leading-[0.9]">
                SELECT YOUR<br/>INTELLIGENCE TIER.
            </h1>
            <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
                Scalable compute power for high-stakes enterprise environments. Engineered for precision, speed, and architectural sovereignty.
            </p>
        </section>
    );
};

export default PricingHero;
