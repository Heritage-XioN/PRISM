import React from 'react';

const SolutionsHero = () => {
    return (
        <section className="relative pt-32 pb-24 px-8 text-center bg-background">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-8">
                Targeted Deployments
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 font-headline max-w-5xl mx-auto leading-[1.1]">
                ENGINEERED FOR EXTREME SCALE.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                PRISM adapts to your specific architectural requirements. From hyper-growth startups to defense-grade enterprises, deploy intelligence configured for your reality.
            </p>
        </section>
    );
};

export default SolutionsHero;
