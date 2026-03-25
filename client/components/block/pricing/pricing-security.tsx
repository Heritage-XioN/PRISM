import React from 'react';

const PricingSecurity = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 bg-surface-container p-10 flex flex-col justify-between border border-white/5">
                    <div>
                        <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                        <h3 className="text-2xl font-bold text-white mb-4">OBSIDIAN SECURITY PROTOCOLS</h3>
                        <p className="text-on-surface-variant leading-relaxed">Every tier includes our foundational hardened security stack, featuring real-time intrusion detection and hardware-level encryption as standard.</p>
                    </div>
                </div>
                <div className="bg-surface-container-low p-10 border border-white/5">
                    <span className="material-symbols-outlined text-primary mb-6" aria-hidden="true">support_agent</span>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-tight">24/7 Monitoring</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Our architects monitor node health around the clock.</p>
                </div>
                <div className="bg-surface-container-low p-10 border border-white/5">
                    <span className="material-symbols-outlined text-primary mb-6" aria-hidden="true">history_edu</span>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-tight">SOC2 Type II</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Fully compliant infrastructure for high-stakes sectors.</p>
                </div>
            </div>
        </section>
    );
};

export default PricingSecurity;
