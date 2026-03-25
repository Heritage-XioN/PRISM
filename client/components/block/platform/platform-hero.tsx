import React from 'react';
import Image from 'next/image';

const PlatformHero = () => {
    return (
        <section className="relative min-h-[921px] flex items-center px-4 md:px-8 overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
                <Image 
                    className="object-cover grayscale opacity-40" 
                    alt="Abstract architectural render of sharp silver geometric monoliths in a dark atmospheric space with metallic reflections" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyXD1-BNQBQ7o7NrG0-gvzg9VEI4DhKah5YUAUTfiLXOTcqbKWToxgK409pkTaC2gVjAmIV_c6qn9xzhCqO9k_FNSJI7g_gR1fTpuE8mzKEQeq1eWAM8_KFgB6epZDL0WKvIfc-u-6QVdV1Q94WzIeHxBayalfpGpK9oD0UFzl4eZ7370mSOYjEVyO5o4aJNP5lc2s3apkjF2ZfXO7rxtoLSD3w7Kl3Mvmhcd1Xm-K0FcxLqcUJvqvKicECNYBExmj4iXa-xRSk0" 
                    fill
                    priority
                />
            </div>
            <div className="relative z-20 max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-[1px] bg-primary"></span>
                    <span className="text-primary font-label text-xs tracking-[0.2em] uppercase font-semibold">The Architect Suite</span>
                </div>
                <h1 className="silver-text text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 font-headline">
                    One Platform,<br/>Infinite Intelligence.
                </h1>
                <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                    PRISM is the definitive technical infrastructure for elite enterprise talent. Orchestrate high-stakes deployments with a unified, high-contrast intelligence layer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-black font-bold px-8 py-4 rounded shadow-lg transition-transform active:scale-95 uppercase text-sm tracking-widest">
                        Deploy Ecosystem
                    </button>
                    <button className="border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded transition-all flex items-center justify-center gap-2 uppercase text-sm tracking-widest">
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">terminal</span> Technical Docs
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PlatformHero;
