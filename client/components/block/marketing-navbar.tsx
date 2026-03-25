import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MarketingNavbarProps {
  activePage?: 'platform' | 'solutions' | 'intelligence' | 'pricing';
}

const MarketingNavbar = ({ activePage }: MarketingNavbarProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-4 md:px-8 py-4 max-w-full shadow-2xl">
      <div className="flex items-center gap-4 md:gap-8">
        <Link href="/" className="text-xl font-black tracking-tighter text-white uppercase font-headline flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
            PRISM
        </Link>
        
        <div className="hidden md:flex gap-6 font-semibold tracking-tight text-sm">
          <Link 
            href="/platform" 
            className={cn(
                "transition-colors duration-200", 
                activePage === 'platform' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-white"
            )}>
            Platform
          </Link>
          <Link 
            href="/solutions" 
            className={cn(
                "transition-colors duration-200", 
                activePage === 'solutions' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-white"
            )}>
            Solutions
          </Link>
          <Link 
             href="/intelligence" 
             className={cn(
                 "transition-colors duration-200", 
                 activePage === 'intelligence' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-white"
             )}>
             Intelligence
          </Link>
          <Link 
            href="/pricing" 
            className={cn(
                "transition-colors duration-200", 
                activePage === 'pricing' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400 hover:text-white"
            )}>
            Pricing
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden sm:block text-slate-400 hover:text-white transition-colors duration-200 font-semibold px-4 py-2 opacity-80 hover:opacity-100 text-sm">
            Sign In
        </button>
        <button className="bg-white text-black font-bold px-4 py-2 md:px-6 rounded-sm scale-95 active:scale-90 transition-transform uppercase text-[10px] md:text-xs tracking-widest shadow-lg">
            Initialize Node
        </button>
      </div>
    </nav>
  );
};

export default MarketingNavbar;
