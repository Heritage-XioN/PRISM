import React from 'react';

const PricingCards = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 relative z-10">
            {/* Professional Tier */}
            <div className="bg-surface-container-low border border-white/5 p-8 flex flex-col h-full hover:bg-surface-variant transition-colors duration-300">
                <div className="mb-8">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 block mb-2">Tier 01</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Professional</h3>
                    <p className="text-sm text-on-surface-variant mt-2">Core architectural functionality for growing nodes.</p>
                </div>
                <div className="mb-8">
                    <span className="text-4xl font-black text-white tracking-tighter">$4,200</span>
                    <span className="text-on-surface-variant text-sm tracking-widest uppercase"> /mo</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>10 Global Compute Nodes</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Standard API Access</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Encrypted Data Lakes</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="material-symbols-outlined" aria-hidden="true">cancel</span>
                        <span>Advanced AI Modeling</span>
                    </li>
                </ul>
                <button className="w-full border border-white/10 text-white font-semibold py-4 hover:bg-white/5 transition-all duration-200 tracking-tight">Select Tier</button>
            </div>
            
            {/* Enterprise Tier (Recommended) */}
            <div className="bg-surface-bright border border-white/20 p-8 flex flex-col h-full relative transform md:-translate-y-4 shadow-2xl z-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Recommended</div>
                <div className="mb-8">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-primary block mb-2">Tier 02</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Enterprise</h3>
                    <p className="text-sm text-on-surface-variant mt-2">Full suite with integrated AI architectural features.</p>
                </div>
                <div className="mb-8">
                    <span className="text-4xl font-black text-white tracking-tighter silver-gradient">$12,800</span>
                    <span className="text-on-surface-variant text-sm tracking-widest uppercase"> /mo</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Unlimited Compute Nodes</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Priority API Priority</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Real-time AI Synthesis</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Multi-Region Sovereignty</span>
                    </li>
                </ul>
                <button className="w-full bg-white text-black font-black py-4 hover:opacity-90 transition-all duration-200 tracking-tight">Initialize Enterprise</button>
            </div>

            {/* Elite Tier */}
            <div className="bg-surface-container-low border border-white/5 p-8 flex flex-col h-full hover:bg-surface-variant transition-colors duration-300">
                <div className="mb-8">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 block mb-2">Tier 03</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Elite</h3>
                    <p className="text-sm text-on-surface-variant mt-2">Custom models with dedicated white-glove onboarding.</p>
                </div>
                <div className="mb-8">
                    <span className="text-4xl font-black text-white tracking-tighter">Custom</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Private Model Training</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Dedicated On-Site Engineer</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>Hardware Acceleration Node</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                        <span>L1 Support Concierge</span>
                    </li>
                </ul>
                <button className="w-full border border-white/10 text-white font-semibold py-4 hover:bg-white/5 transition-all duration-200 tracking-tight">Contact Sales</button>
            </div>
        </section>
    );
};

export default PricingCards;
