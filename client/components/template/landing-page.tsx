import React from 'react';
import MarketingNavbar from '../block/marketing-navbar';
import MarketingFooter from '../block/marketing-footer';
import LandingHero from '../block/landing/landing-hero';
import LandingFeatures from '../block/landing/landing-features';
import LandingPricing from '../block/landing/landing-pricing';
import LandingTestimonials from '../block/landing/landing-testimonials';

const LandingPage = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <MarketingNavbar />
            <main>
                <LandingHero />
                <LandingFeatures />
                <LandingPricing />
                <LandingTestimonials />
            </main>
            <MarketingFooter />
        </div>
    );
};

export default LandingPage;
