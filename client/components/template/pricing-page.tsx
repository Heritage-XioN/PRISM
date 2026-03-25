import React from 'react';
import MarketingNavbar from '../block/marketing-navbar';
import MarketingFooter from '../block/marketing-footer';
import PricingHero from '../block/pricing/pricing-hero';
import PricingCards from '../block/pricing/pricing-cards';
import PricingComparison from '../block/pricing/pricing-comparison';
import PricingSecurity from '../block/pricing/pricing-security';
import PricingCta from '../block/pricing/pricing-cta';

const PricingPage = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
            <MarketingNavbar activePage="pricing" />
            <main className="pt-32 pb-24">
                <PricingHero />
                <PricingCards />
                <PricingComparison />
                <PricingSecurity />
                <PricingCta />
            </main>
            <MarketingFooter />
        </div>
    );
};

export default PricingPage;
