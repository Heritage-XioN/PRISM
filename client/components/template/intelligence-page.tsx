import React from 'react';
import MarketingNavbar from '../block/marketing-navbar';
import MarketingFooter from '../block/marketing-footer';
import IntelligenceHero from '../block/intelligence/intelligence-hero';
import IntelligenceNeuralMatching from '../block/intelligence/intelligence-neural-matching';
import IntelligenceMatrix from '../block/intelligence/intelligence-matrix';
import IntelligenceRiskModel from '../block/intelligence/intelligence-risk-model';
import IntelligenceDashboard from '../block/intelligence/intelligence-dashboard';
import IntelligenceCta from '../block/intelligence/intelligence-cta';

const IntelligencePage = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
            <MarketingNavbar activePage="intelligence" />
            <main>
                <IntelligenceHero />
                <IntelligenceNeuralMatching />
                <IntelligenceMatrix />
                <IntelligenceRiskModel />
                <IntelligenceDashboard />
                <IntelligenceCta />
            </main>
            <MarketingFooter />
        </div>
    );
};

export default IntelligencePage;
