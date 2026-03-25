import React from 'react';

const IntelligenceRiskModel = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                    {/* Abstract Risk Model Visualization */}
                    <div className="relative w-full aspect-[4/3] bg-[#050505] border border-white/10 rounded-xl overflow-hidden p-6">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="px-2 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded">Simulation Active</span>
                        </div>
                        <div className="h-full flex flex-col justify-end gap-2 mt-8">
                            {/* Bar Chart Mockup */}
                            <div className="flex items-end gap-2 h-48 w-full border-b border-l border-white/10 p-2 relative">
                                {/* Grid Lines */}
                                <div className="absolute top-0 left-0 w-full border-t border-white/5 border-dashed"></div>
                                <div className="absolute top-1/2 left-0 w-full border-t border-white/5 border-dashed"></div>
                                
                                {/* Bars */}
                                <div className="w-1/6 bg-white/10 h-[30%] rounded-t hover:bg-white/20 transition-all cursor-crosshair"></div>
                                <div className="w-1/6 bg-primary/40 h-[45%] rounded-t hover:bg-primary/50 transition-all cursor-crosshair relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">Q2</div>
                                </div>
                                <div className="w-1/6 bg-white/20 h-[60%] rounded-t hover:bg-white/30 transition-all cursor-crosshair"></div>
                                <div className="w-1/6 bg-primary/80 h-[85%] rounded-t shadow-[0_0_15px_rgba(13,166,242,0.3)] cursor-crosshair relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">Crit Risk</div>
                                </div>
                                <div className="w-1/6 bg-white/10 h-[40%] rounded-t hover:bg-white/20 transition-all cursor-crosshair"></div>
                                <div className="w-1/6 bg-primary/30 h-[50%] rounded-t hover:bg-primary/40 transition-all cursor-crosshair"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest px-2">
                                <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Q1</span><span>Q2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                    <div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">Risk &amp; Retention</span>
                        <h2 className="text-4xl font-bold text-white tracking-tight font-headline">Attrition Forecasting</h2>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                        Preempt talent drain. Our models analyze compensation vectors, engagement velocity, and market demand to flag high-risk flight profiles before notice is given.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">warning</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Flight Risk Indicators</h4>
                                <p className="text-sm text-on-surface-variant">Real-time alerts for key technical personnel.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">monetization_on</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Compensation Modeling</h4>
                                <p className="text-sm text-on-surface-variant">Dynamic market baselining for equity and salary parity.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default IntelligenceRiskModel;
