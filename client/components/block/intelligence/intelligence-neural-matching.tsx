import React from 'react';

const IntelligenceNeuralMatching = () => {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">Proprietary Algorithms</span>
                        <h2 className="text-4xl font-bold text-white tracking-tight font-headline">Neural Matching &amp; <br/>Predictive Analytics</h2>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                        Our proprietary Neural Matching engine doesn't just look for keywords; it understands technical proficiency through contextual vector mapping. By analyzing over 400 data points per individual, we predict performance outcomes with 94% accuracy.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 border border-white/5 bg-surface-container-low rounded-lg">
                            <div className="text-primary mb-2"><span className="material-symbols-outlined" aria-hidden="true">hub</span></div>
                            <div className="text-white font-bold mb-1">Vector Mapping</div>
                            <div className="text-xs text-on-surface-variant">Context-aware skill extraction from unstructured data.</div>
                        </div>
                        <div className="p-6 border border-white/5 bg-surface-container-low rounded-lg">
                            <div className="text-primary mb-2"><span className="material-symbols-outlined" aria-hidden="true">trending_up</span></div>
                            <div className="text-white font-bold mb-1">Outcome Prediction</div>
                            <div className="text-xs text-on-surface-variant">Forecasting 12-month tenure success rates.</div>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-square glass-panel border border-white/10 rounded-xl overflow-hidden p-8 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    {/* Abstract Data Visualization Mock */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-full h-full border border-primary/20 rounded-full flex items-center justify-center p-12">
                            <div className="w-full h-full border border-primary/40 rounded-full flex items-center justify-center p-12">
                                <div className="w-full h-full border border-primary/60 rounded-full flex items-center justify-center bg-primary/5">
                                    <span className="material-symbols-outlined text-primary text-5xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                                </div>
                            </div>
                        </div>
                        {/* Animated Nodes */}
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(13,166,242,0.5)] animate-ping"></div>
                        <div className="absolute top-1/2 right-1/4 w-4 h-4 border border-white/20 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntelligenceNeuralMatching;
