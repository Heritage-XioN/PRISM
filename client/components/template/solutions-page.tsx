import React from 'react';
import MarketingNavbar from '../block/marketing-navbar';
import MarketingFooter from '../block/marketing-footer';
import SolutionsHero from '../block/solutions/solutions-hero';
import SolutionsSectors from '../block/solutions/solutions-sectors';
import SolutionsFeatures from '../block/solutions/solutions-features';
import SolutionsCta from '../block/solutions/solutions-cta';

const SolutionsPage = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
            <MarketingNavbar activePage="solutions" />
            <main>
                <SolutionsHero />
                <SolutionsSectors />
                <SolutionsFeatures />
                <SolutionsCta />
            </main>
            <MarketingFooter />
        </div>
    );
};

export default SolutionsPage;
