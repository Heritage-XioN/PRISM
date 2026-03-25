import React from 'react';

const LandingFeatures = () => {
    return (
        <section className="py-24 px-6 relative bg-background-light dark:bg-[#0a1419]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-headline text-slate-900 dark:text-white">Intelligent Features</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Cutting-edge AI tools designed for modern recruitment teams to scale human potential with machine precision.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="glass glass-hover p-10 rounded-2xl transition-all group border-transparent dark:border-[rgba(49,86,104,0.3)]">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl" aria-hidden="true">psychology</span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Neural Matching</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Precision candidate matching using advanced neural networks that understand context beyond keywords.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="glass glass-hover p-10 rounded-2xl transition-all group border-primary/40 relative">
                        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary/40">
                            <span className="material-symbols-outlined text-3xl" aria-hidden="true">insights</span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Predictive Analytics</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Data-driven insights to forecast hiring needs, retention risks, and market-wide talent trends.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="glass glass-hover p-10 rounded-2xl transition-all group border-transparent dark:border-[rgba(49,86,104,0.3)]">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl" aria-hidden="true">rocket_launch</span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Automated Sourcing</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Streamlined sourcing across multiple platforms instantly with autonomous agent exploration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingFeatures;
