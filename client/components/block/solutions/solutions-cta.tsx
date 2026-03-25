import React from 'react';

const SolutionsCta = () => {
    return (
        <section className="py-24 px-8 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="material-symbols-outlined text-primary text-5xl mb-6" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 font-headline uppercase">
                    Initialize Your First Node
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded shadow-lg shadow-primary/30 transition-all uppercase tracking-widest text-sm">
                        Start Pilot Deployment
                    </button>
                    <button className="border border-white/10 hover:bg-white/5 text-white font-bold px-8 py-4 rounded transition-all uppercase tracking-widest text-sm">
                        Contact Architecture Team
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsCta;
