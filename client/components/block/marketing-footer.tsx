import React from 'react';
import Link from 'next/link';

const MarketingFooter = () => {
    return (
        <footer className="w-full py-12 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <span className="text-lg font-black text-white font-headline flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                        PRISM
                    </span>
                    <span className="hidden md:block w-[1px] h-4 bg-white/10"></span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">© {new Date().getFullYear()} PRISM ARCHITECT. ALL RIGHTS RESERVED.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <Link href="#" className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-600 hover:text-primary transition-colors">
                        Security
                    </Link>
                    <Link href="#" className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-600 hover:text-primary transition-colors">
                        API
                    </Link>
                    <Link href="#" className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-600 hover:text-primary transition-colors">
                        Terms
                    </Link>
                    <Link href="#" className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-600 hover:text-primary transition-colors">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default MarketingFooter;
