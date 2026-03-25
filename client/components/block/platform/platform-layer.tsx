import React from 'react';
import Image from 'next/image';

const PlatformLayer = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase mb-4 block">Core Infrastructure</span>
                        <h2 className="text-4xl font-bold mb-6 silver-text font-headline">The Obsidian Layer</h2>
                        <p className="text-on-surface-variant mb-8 leading-relaxed">
                            A cold, precise, and authoritative backbone. The Obsidian Layer provides a non-volatile environment for high-stakes enterprise data processing, ensuring zero-latency talent matching across global node clusters.
                        </p>
                        <div className="space-y-6">
                            <div className="p-6 border border-white/5 bg-surface-container-low rounded-lg flex gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">hub</span>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Decentralized Node Architecture</h4>
                                    <p className="text-sm text-on-surface-variant">Distributed processing prevents single-point failure across regional intelligence hubs.</p>
                                </div>
                            </div>
                            <div className="p-6 border border-white/5 bg-surface-container-low rounded-lg flex gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">memory</span>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Neural Vector Indexing</h4>
                                    <p className="text-sm text-on-surface-variant">Proprietary high-dimensional mapping of talent capabilities and technical proficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 pointer-events-none"></div>
                        <div className="relative bg-surface-variant border border-white/10 p-2 rounded-xl overflow-hidden aspect-square">
                            <Image 
                                className="object-cover opacity-60" 
                                alt="Top down view of complex server motherboard circuitry with glowing cyan light tracers and dark metallic finish" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCnYhTu3ivdEqWJa9CFOv1alUIlkqhV5eZ2SQdL0j5N0Hfewbdr1L2kDhtryS_HQ-T_GrUCGp_3-vjmlGu236h9AfNry4MkV_nT9DRgaTp3zNZBCsagHl4pk4OsT8QBlPC3fvdK3xhbCVUqp7F4qKT01gyWQ1ACq3yWpg7BsqGbcauzSyyOqmP9OMSVdbkH3sj1H9ktfwVLmJXgotOZs37RfcYlGqn7vwtrWIvWWdbG8SQm1RKsn9z9Li-COA30cd5JtinxyXPFz4" 
                                fill
                            />
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-6 obsidian-glass border border-white/10 rounded">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase">System Status: Active</span>
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                </div>
                                <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[84%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformLayer;
