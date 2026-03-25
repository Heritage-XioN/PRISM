import React from 'react';

const PricingComparison = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-32">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-12 text-center uppercase">Technical Capabilities</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="text-left py-6 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Feature Segment</th>
                            <th className="text-center py-6 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Professional</th>
                            <th className="text-center py-6 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Enterprise</th>
                            <th className="text-center py-6 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Elite</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-semibold">Compute Throughput</td>
                            <td className="text-center py-6 px-4 text-on-surface-variant">500 TFLOPS</td>
                            <td className="text-center py-6 px-4 text-on-surface-variant">2,500 TFLOPS</td>
                            <td className="text-center py-6 px-4 text-white font-bold">Unlimited</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-semibold">Latent Space Access</td>
                            <td className="text-center py-6 px-4 text-on-surface-variant">Shared</td>
                            <td className="text-center py-6 px-4 text-white">Dedicated</td>
                            <td className="text-center py-6 px-4 text-white">Private Instance</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-semibold">API Rate Limits</td>
                            <td className="text-center py-6 px-4 text-on-surface-variant">10k/min</td>
                            <td className="text-center py-6 px-4 text-on-surface-variant">100k/min</td>
                            <td className="text-center py-6 px-4 text-white font-bold">Unmetered</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-semibold">Security Protocol</td>
                            <td className="text-center py-6 px-4 text-on-surface-variant">AES-256</td>
                            <td className="text-center py-6 px-4 text-on-surface-variant">Quantum-Safe</td>
                            <td className="text-center py-6 px-4 text-white font-bold">Cold-Storage Airgap</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PricingComparison;
