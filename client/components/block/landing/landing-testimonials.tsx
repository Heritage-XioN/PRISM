import React from 'react';
import Image from 'next/image';

const LandingTestimonials = () => {
    return (
        <section className="py-24 px-6 bg-[#0a1419] dark:bg-[#0a1419]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
                        <h3 className="text-4xl font-black font-headline text-slate-900 dark:text-white">Real Results from Global Teams</h3>
                    </div>
                    <div className="flex gap-2 text-slate-900 dark:text-white">
                        <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl border-l-4 border-l-primary border-transparent dark:border-[rgba(49,86,104,0.3)]">
                        <div className="flex gap-1 text-primary mb-6">
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                        <p className="text-lg italic mb-8 leading-relaxed text-slate-800 dark:text-slate-200">"PRISM has completely transformed how we identify technical talent. The neural matching is scarily accurate."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 relative rounded-full bg-slate-800 border border-primary/20 flex items-center justify-center overflow-hidden">
                                <Image alt="Sarah Jenkins" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7-ojHh5i2fHaym2x4MjryF8mnyP1IAvSF6gSpDQMhiIJ7kU-MMz_m6Z5tQo1mJfYt7uhzq40c_ifIhqLwetVeZ-q6m-ieJaVYWUKpibX-8J2qtBaCHAsqWyRCu32iImngqYTGOmBbmD90Sv324X38r2JLhv3ItWhyzXLZxGyESO3NsUmCn9QFCzwrzPAjopAhtxJq5GRCHquzZfCGRpwpW8l9suMNrK81wC1q-9Cw95SibxNRLCTuW5zUfVtTvsbHRth1G17UZjk" fill sizes="48px" />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-900 dark:text-white">Sarah Jenkins</h5>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest">Head of Talent @ TechFlow</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-8 rounded-2xl border-transparent dark:border-[rgba(49,86,104,0.3)]">
                        <div className="flex gap-1 text-primary mb-6">
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                        <p className="text-lg italic mb-8 leading-relaxed text-slate-800 dark:text-slate-200">"The predictive analytics saved us months of trial and error in our scaling phase. It's a game changer."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 relative rounded-full bg-slate-800 border border-primary/20 flex items-center justify-center overflow-hidden">
                                <Image alt="David Chen" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXCU5X2mRygBEi67zBp2HlyYTAOaSwZ6q2wa-nAPPOOOlpV5rTykFnm7f3hAfbKBbRHd6pKfXNh2JC6TT_fgW5DrOuuQS_tzirPDwyySN566UpDWm1yXk8YlQjj5qa7fZeByKU2OnjF0q1Kqg_TzEKSusy8uN8kbC8gsLO7-AcoEUC4c3rThnnq7H8jIS1NJHU_ivcsQ-IuWfRkVoDnfo0Y99yKTQsDR3oajNGTE8-vkQ611s_11soTVNmsvtRnric6R6V_Wi04Gs" fill sizes="48px" />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-900 dark:text-white">David Chen</h5>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest">VP Engineering @ Quantum</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-8 rounded-2xl border-transparent dark:border-[rgba(49,86,104,0.3)]">
                        <div className="flex gap-1 text-primary mb-6">
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined font-fill text-sm" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                        <p className="text-lg italic mb-8 leading-relaxed text-slate-800 dark:text-slate-200">"I've used every major recruitment SaaS tool. Nothing comes close to the intelligence level of PRISM."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 relative rounded-full bg-slate-800 border border-primary/20 flex items-center justify-center overflow-hidden">
                                <Image alt="Marcus Thorne" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwqVLPpY_RljUcB5UJhzcoH1sbOOaDyugvZubPTKMqC3orTMP7tRoRf6P0xIOPGo4onJeZEtH_wmBFlJE1zkW_eEYqyt_kwsAViLNRNgLdixq6xyFpdNkJfM0GYS0MNU0H8BoWo_d7rHQBlVx82JOLfpkg4uROiVLh4M7nDSd1HCNCb8TcRYiXyNJTNxX562e-qX476t5dru6cx4uhlc0b0-y0_Vp59Yyiz-AvcC5hi9h-p26HQbh3aHHji5yhdETNMkkQbRxH2Qw" fill sizes="48px" />
                            </div>
                            <div>
                                <h5 className="font-bold text-slate-900 dark:text-white">Marcus Thorne</h5>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest">Chief People Officer @ Nexus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingTestimonials;
