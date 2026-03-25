import React from 'react';

const PricingCta = () => {
    return (
        <section className="max-w-7xl mx-auto px-8">
            <div className="relative bg-[#050505] border border-white/10 p-16 text-center overflow-hidden">
                {/* Atmospheric background element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 relative z-10 font-headline">
                    READY FOR ARCHITECTURAL DOMINANCE?
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
                    <button className="bg-white text-black font-black px-10 py-5 hover:bg-slate-200 transition-all duration-200 tracking-tighter text-lg uppercase">
                        Request Private Executive Briefing
                    </button>
                    <button className="border border-white/10 text-white font-bold px-10 py-5 hover:bg-white/5 transition-all duration-200 tracking-tighter text-lg uppercase">
                        View Technical Docs
                    </button>
                </div>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600 relative z-10">Secure Line: +1 (888) PRISM-ARCH</p>
            </div>
        </section>
    );
};

export default PricingCta;
