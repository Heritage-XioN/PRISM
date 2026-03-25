import React from 'react';
import Image from 'next/image';

const PlatformModules = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4 silver-text uppercase tracking-tight font-headline">Intelligence Modules</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">Precision tools engineered for the modern technical architect.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Module 1 */}
                    <div className="md:col-span-2 group relative bg-surface-container-low border border-white/5 p-8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
                        <div className="relative z-10 flex flex-col h-full">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>settings_account_box</span>
                            <h3 className="text-2xl font-bold text-white mb-4">Admin Command Center</h3>
                            <p className="text-on-surface-variant max-w-md mb-8">Unified governance for global talent operations. Manage permissions, security tiers, and cross-border deployments from a single glass-pane interface.</p>
                            <div className="mt-auto flex flex-wrap gap-4">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-widest font-bold">Node Management</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-widest font-bold">Policy Engine</span>
                            </div>
                        </div>
                        <Image 
                            className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" 
                            alt="Abstract data visualization with clean lines and high contrast charts in a dark mode interface" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUk3QwxPYnTAgGblesVNg_wpHFNswEldVya4SDcNGAfh2yendngLdw1-FplZ-dj5zxNZhbzilC9NByXj2JpgFjrbU9hDIhIfsnGvGqgbGNauMg5AQozBUKzEzODsfkqlzhyCQy5yTSCgDDIneZrdC5uofUo7HLZYNMFlSGdudbdrwvDT1dLe9HtLyjlSO146tArsyhzHu4fNkS24zERLAwPYv2S2uhkyJpyKZsTjdkvf7F7WtAw-lWhHmSOJzy7oPTYqNiDWH2mbM"
                            fill 
                        />
                    </div>
                    {/* Module 2 */}
                    <div className="bg-surface-container-low border border-white/5 p-8 rounded-xl hover:border-white/20 transition-all duration-300 flex flex-col">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true">storefront</span>
                        <h3 className="text-2xl font-bold text-white mb-4">AI Marketplace</h3>
                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-grow">Access pre-trained intelligence nodes and specialized talent models optimized for infrastructure engineering.</p>
                        <a className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">
                            Explore Models <span className="material-symbols-outlined text-xs" aria-hidden="true">arrow_forward</span>
                        </a>
                    </div>
                    {/* Module 3 */}
                    <div className="bg-surface-container-low border border-white/5 p-8 rounded-xl hover:border-white/20 transition-all duration-300">
                        <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true">insights</span>
                        <h3 className="text-2xl font-bold text-white mb-4">Talent Hub</h3>
                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">The central repository for high-fidelity talent data. Real-time skill validation and architectural fit analysis.</p>
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-800"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-700"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-600"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-white">+2k</div>
                        </div>
                    </div>
                    {/* Module 4 */}
                    <div className="md:col-span-2 bg-surface-container-low border border-white/5 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center hover:border-white/20 transition-all duration-300">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-4">Predictive Dynamics</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Forecast technical requirements before they manifest. Our PRISM engine simulates workforce evolution scenarios with 98.4% accuracy.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 w-full md:w-auto">
                            <div className="h-20 w-full md:w-32 bg-white/5 rounded border border-white/5"></div>
                            <div className="h-20 w-full md:w-32 bg-primary/20 rounded border border-primary/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformModules;
