import React from 'react';

const LandingPricing = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Pricing Plans</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-headline text-slate-900 dark:text-white">Scalable Intelligence</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Basic */}
                    <div className="glass p-8 rounded-2xl flex flex-col border-[rgba(49,86,104,0.3)]">
                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Starter</h4>
                            <div className="mt-4 flex items-baseline gap-1 text-slate-900 dark:text-white">
                                <span className="text-4xl font-black">$499</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow text-slate-700 dark:text-slate-300">
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Up to 5 active jobs
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Basic neural matching
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Standard support
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-lg border border-primary/30 font-bold text-slate-900 dark:text-white hover:bg-primary/5 transition-colors">Choose Starter</button>
                    </div>
                    {/* Pro */}
                    <div className="glass p-8 rounded-2xl flex flex-col relative border-primary/50 scale-105 z-10 shadow-2xl">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">Most Popular</div>
                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Professional</h4>
                            <div className="mt-4 flex items-baseline gap-1">
                                <span className="text-4xl font-black text-primary">$1,299</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow text-slate-900 dark:text-white">
                            <li className="flex items-center gap-3 text-sm font-semibold">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Unlimited active jobs
                            </li>
                            <li className="flex items-center gap-3 text-sm font-semibold">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Advanced predictive analytics
                            </li>
                            <li className="flex items-center gap-3 text-sm font-semibold">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Autonomous sourcing agents
                            </li>
                            <li className="flex items-center gap-3 text-sm font-semibold">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Priority 24/7 support
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">Start Free Trial</button>
                    </div>
                    {/* Enterprise */}
                    <div className="glass p-8 rounded-2xl flex flex-col border-[rgba(49,86,104,0.3)]">
                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Enterprise</h4>
                            <div className="mt-4 flex items-baseline gap-1 text-slate-900 dark:text-white">
                                <span className="text-4xl font-black">Custom</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow text-slate-700 dark:text-slate-300">
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Custom model training
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                On-premise deployment
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary" aria-hidden="true">check_circle</span>
                                Dedicated success manager
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-lg border border-primary/30 font-bold text-slate-900 dark:text-white hover:bg-primary/5 transition-colors">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPricing;
