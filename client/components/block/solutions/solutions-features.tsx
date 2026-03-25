import React from 'react';
import Image from 'next/image';

const SolutionsFeatures = () => {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto bg-background">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-16 uppercase text-center font-headline">Enterprise Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Large Cell */}
                <div className="md:col-span-2 md:row-span-2 bg-surface-container-low border border-white/5 p-10 flex flex-col justify-between group">
                    <div>
                        <span className="text-primary mb-4 block"><span className="material-symbols-outlined text-4xl" aria-hidden="true">device_hub</span></span>
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-primary transition-colors">Cross-Functional Assembly</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                            Instantly assemble elite squads for complex architectural builds. PRISM analyzes technical overlap, working style vectors, and historical outcomes to generate the mathematically optimal team configuration for your specific technical challenge.
                        </p>
                    </div>
                    {/* Mock Visualization */}
                    <div className="h-48 border border-white/10 rounded flex items-center justify-center relative overflow-hidden bg-[#050505]">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        <div className="relative flex items-center gap-4 z-10">
                            <div className="w-12 h-12 rounded-full border-2 border-primary border-dashed animate-[spin_10s_linear_infinite] flex items-center justify-center bg-[#050505]">
                                <span className="text-[8px] font-bold text-primary uppercase">BE</span>
                            </div>
                            <div className="h-2 w-12 border-t-2 border-b-2 border-white/20 relative">
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/50 shadow-[0_0_5px_#0da6f2]"></div>
                            </div>
                            <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-[#111]">
                                <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>hexagon</span>
                            </div>
                            <div className="h-2 w-12 border-t-2 border-b-2 border-white/20 relative">
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/50 shadow-[0_0_5px_#0da6f2]"></div>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-primary border-dashed animate-[spin_10s_linear_infinite_reverse] flex items-center justify-center bg-[#050505]">
                                <span className="text-[8px] font-bold text-primary uppercase">FE</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Standard Cell */}
                <div className="md:col-span-2 bg-surface-container-low border border-white/5 p-8 flex flex-col justify-between group">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">Succession Planning</h3>
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">account_tree</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-6">
                        Map future leadership transitions automatically. PRISM identifies latency in your talent pipeline and prescribes specific upskilling vectors to prepare internal talent for critical architectural roles.
                    </p>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[65%] shadow-[0_0_10px_#0da6f2]"></div>
                    </div>
                </div>

                {/* Standard Cell */}
                <div className="md:col-span-2 bg-surface-container-low border border-white/5 p-8 flex flex-col justify-between group relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 opacity-10 blur-xl">
                        <span className="material-symbols-outlined text-[200px] text-primary" aria-hidden="true">query_stats</span>
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">Diversity Engineering</h3>
                            <span className="material-symbols-outlined text-primary" aria-hidden="true">donut_large</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-8">
                            Algorithmic bias removal at the source code level. Ensure equitable architectural teams by letting pure technical proficiency and cognitive diversity drive the neural matching process.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-primary border border-primary/30 rounded bg-primary/10">Bias Deflection</span>
                            <span className="px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-white border border-white/10 rounded bg-white/5">Cognitive Mapping</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsFeatures;
