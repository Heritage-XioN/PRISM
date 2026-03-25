import React from 'react';
import MarketingNavbar from '../block/marketing-navbar';
import MarketingFooter from '../block/marketing-footer';
import PlatformHero from '../block/platform/platform-hero';
import PlatformLayer from '../block/platform/platform-layer';
import PlatformModules from '../block/platform/platform-modules';
import PlatformSecurity from '../block/platform/platform-security';
import PlatformIntegrations from '../block/platform/platform-integrations';

const PlatformPage = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
            <MarketingNavbar activePage="platform" />
            <main className="pt-20">
                <PlatformHero />
                <PlatformLayer />
                <PlatformModules />
                <PlatformSecurity />
                <PlatformIntegrations />
            </main>
            <MarketingFooter />
        </div>
    );
};

export default PlatformPage;
