import React from 'react';
import Image from 'next/image';

const PlatformSecurity = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-surface-container-lowest border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold mb-6 silver-text font-headline">Sovereign Data Security</h2>
                    <p className="text-on-surface-variant mb-8">
                        Architected for the highest security tiers. Your intelligence remains yours, protected by aerospace-grade encryption and rigorous compliance protocols.
                    </p>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-500" aria-hidden="true">verified_user</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">AES-256 Encryption</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-500" aria-hidden="true">security</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">SOC2 Type II</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-500" aria-hidden="true">gavel</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">GDPR Compliant</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-32 h-32 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all">
                        <div className="relative w-12 h-12 mb-2 opacity-80">
                            <Image 
                                alt="Stylized silver security seal with metallic reflections" 
                                className="object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt4yD02-KnUa3oo_KVGqAr_AMhPv0dMuWmOXWR_9Ygg2DacO-_yEU7I-XKw8lmnrsH7DqG41eYdVA6HjE0e76o2gGGc5LS7VnzHRZtXKH0tcDVNhKJkb5OdbEcBb1HkJfApZOScPJwkg6ATlXF02z_SuFpw2BGy877uo_WvhsnK0NbTlQY6TMutEnHJWcLYumG1ht5cZt7yld6d2b2Z35BJJJOaD7bFKLe7sdIlif1vEy22ggwsWGQxI3POT8oojYmMT3o_K8CGs0" 
                                fill 
                                sizes="48px"
                            />
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-tighter text-slate-500">Verified</span>
                    </div>
                    <div className="w-32 h-32 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all">
                        <div className="relative w-12 h-12 mb-2 opacity-80">
                            <Image 
                                alt="Minimalist technical badge icon on dark background" 
                                className="object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZneuHrf0MDgzw2fgu_aP9L5cNTiOl826kVRJbiqFQjQnfgSN-UppoB2A6zV4MiC5LYVmgxiFx-DSG9CaDG-M88eIA3v-ontNZ89lbx-VNlZcZDZakIWAFDSmEwua7O7Am_12ghI57H4YfX0VUK3iB3jccnz5d-CJZ9KVrbs1rnC-MfY_7b6MEMwz7TbWRrbc3y83FGKyZ8VmiqGMqviHOMI7bA7HKUkJyvsfgwyNZATFuhIPHy2bBb8qoIpHA-o_KqFXA2LUCKc" 
                                fill 
                                sizes="48px"
                            />
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-tighter text-slate-500">Architect</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformSecurity;
