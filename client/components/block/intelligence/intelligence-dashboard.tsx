import React from 'react';

const IntelligenceDashboard = () => {
    return (
        <section className="py-24 bg-surface-container-low border-t border-white/5">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">Executive Interface</span>
                    <h2 className="text-4xl font-bold text-white tracking-tight font-headline">The Command Dashboard</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto mt-4">A high-contrast, zero-distraction environment to monitor your entire organization's technical capability at a glance.</p>
                </div>
                {/* Dashboard Mockup */}
                <div className="w-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col">
                    {/* Dashboard Header */}
                    <div className="h-12 border-b border-white/10 bg-white/5 flex items-center justify-between px-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-error/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">Global Overview / Intelligence Module</div>
                        <div className="flex gap-4 text-on-surface-variant">
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">search</span>
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">tune</span>
                        </div>
                    </div>
                    {/* Dashboard Body */}
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* KPI Cards */}
                        <div className="bg-white/5 border border-white/10 rounded p-4 flex flex-col justify-between">
                            <span className="text-[10px] uppercase text-on-surface-variant tracking-widest mb-4">Total Tech Headcount</span>
                            <div className="flex items-end justify-between">
                                <span className="text-3xl font-bold text-white font-mono">1,402</span>
                                <span className="text-sm text-green-400 font-mono">+12% YoY</span>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-4 flex flex-col justify-between">
                            <span className="text-[10px] uppercase text-on-surface-variant tracking-widest mb-4">Critical Attrition Risk</span>
                            <div className="flex items-end justify-between">
                                <span className="text-3xl font-bold text-error font-mono">4.2%</span>
                                <span className="text-sm text-error font-mono">+0.8% MoM</span>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-4 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10"></div>
                            <span className="text-[10px] uppercase text-primary tracking-widest mb-4 relative z-10">Architectural Readiness</span>
                            <div className="flex items-end justify-between relative z-10">
                                <span className="text-3xl font-bold text-white font-mono">92.4</span>
                                <span className="text-[10px] text-primary uppercase font-bold tracking-widest bg-primary/20 px-2 py-1 rounded">Optimal</span>
                            </div>
                        </div>
                        
                        {/* Main Chart Area */}
                        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded p-4 min-h-[300px] flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[10px] uppercase text-on-surface-variant tracking-widest">Skill Evolution Forecast</span>
                                <select className="bg-transparent text-[10px] text-white uppercase tracking-widest border border-white/20 rounded px-2 py-1 outline-none">
                                    <option className="bg-[#050505]">YTD</option>
                                    <option className="bg-[#050505]">12M FWD</option>
                                </select>
                            </div>
                            {/* Line Chart Mockup */}
                            <div className="flex-grow flex items-end gap-1 relative overflow-hidden pt-8">
                                {/* Simulated curved line (SVG) */}
                                <svg className="absolute inset-0 w-full h-full preserve-3d" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0,80 Q25,20 50,50 T100,10" fill="none" stroke="#0da6f2" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                    <path d="M0,80 Q25,20 50,50 T100,10 L100,100 L0,100 Z" fill="url(#grad)" stroke="none"></path>
                                    <defs>
                                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(13,166,242,0.3)" />
                                            <stop offset="100%" stopColor="rgba(13,166,242,0)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Side Panel List */}
                        <div className="bg-white/5 border border-white/10 rounded p-4 flex flex-col">
                            <span className="text-[10px] uppercase text-on-surface-variant tracking-widest mb-6 block">Critical Interventions</span>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <div>
                                        <div className="text-sm font-bold text-white">Lead SecOps Eng</div>
                                        <div className="text-[10px] text-error uppercase tracking-widest">Flight Risk: High</div>
                                    </div>
                                    <button className="text-[10px] bg-white text-black font-bold px-2 py-1 rounded">Action</button>
                                </li>
                                <li className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <div>
                                        <div className="text-sm font-bold text-white">Sr. Data Architect</div>
                                        <div className="text-[10px] text-yellow-500 uppercase tracking-widest">Comp Mismatch</div>
                                    </div>
                                    <button className="text-[10px] bg-white/10 text-white hover:bg-white text-black font-bold px-2 py-1 rounded transition-colors">Review</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntelligenceDashboard;
