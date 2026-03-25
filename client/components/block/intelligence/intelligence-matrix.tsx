import React from 'react';

const IntelligenceMatrix = () => {
    return (
        <section className="py-24 bg-surface-container-lowest border-y border-white/5">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">Organizational Mapping</span>
                        <h2 className="text-4xl font-bold text-white tracking-tight font-headline">Skill Density Matrix</h2>
                        <p className="text-on-surface-variant mt-4">A multi-dimensional view of your workforce's core competencies. Identify talent deserts and innovation clusters in real-time.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-xs font-semibold text-white">Saturated</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded">
                            <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                            <span className="text-xs font-semibold text-white">Critical Gap</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
                    {/* Matrix Grid Elements */}
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">DevOps</span>
                        <div className="h-1 w-full bg-primary/60"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">React Architecture</span>
                        <div className="h-1 w-3/4 bg-primary/40"></div>
                    </div>
                    <div className="aspect-square bg-primary/10 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">ML Engineering</span>
                        <div className="h-1 w-full bg-primary"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">Rust Systems</span>
                        <div className="h-1 w-1/4 bg-error/40"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">Cloud Security</span>
                        <div className="h-1 w-1/2 bg-primary/20"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">Data Pipeline</span>
                        <div className="h-1 w-full bg-primary/80"></div>
                    </div>
                    {/* Row 2 */}
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">Product Design</span>
                        <div className="h-1 w-1/3 bg-primary/20"></div>
                    </div>
                    <div className="aspect-square bg-error/10 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant font-bold text-error">Cybersec</span>
                        <div className="h-1 w-[5%] bg-error"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">K8s Ops</span>
                        <div className="h-1 w-full bg-primary/60"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">Python Backend</span>
                        <div className="h-1 w-3/4 bg-primary/40"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">iOS Swift</span>
                        <div className="h-1 w-full bg-primary/80"></div>
                    </div>
                    <div className="aspect-square bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-primary/20 transition-colors">
                        <span className="text-[10px] text-on-surface-variant">GraphQL</span>
                        <div className="h-1 w-1/2 bg-primary/30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntelligenceMatrix;
