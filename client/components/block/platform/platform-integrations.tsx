import React from 'react';

const PlatformIntegrations = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 silver-text font-headline">The Connectivity Mesh</h2>
                <div className="flex flex-wrap justify-center gap-12 opacity-50">
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl" aria-hidden="true">cloud_sync</span>
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">HRIS Cloud</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl" aria-hidden="true">dataset_linked</span>
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">ERP Mesh</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl" aria-hidden="true">api</span>
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">REST Core</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl" aria-hidden="true">sync_alt</span>
                        <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Identity Hub</span>
                    </div>
                </div>
                <p className="mt-12 text-sm text-on-surface-variant italic">Native connectors for SAP, Workday, Oracle, and ServiceNow environments.</p>
            </div>
        </section>
    );
};

export default PlatformIntegrations;
