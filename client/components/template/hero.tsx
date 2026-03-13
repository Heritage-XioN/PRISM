import React from 'react';
import HeroTextSection from '../block/hero-text-section';
import HeroImageSection from '../block/hero-image-section';
import HeroBannerSvg from '../ui/hero-banner-svg';

// this was not tested for mobile responsiveness
const Hero = () => {
	return (
		<section className='relative'>
			<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-7 bg-linear-to-r from-[#4f2099] via-[#6637bd] to-[#8152e7] px-4 pt-12 pb-24'>
				<HeroTextSection />
				<HeroImageSection />
			</div>
			<HeroBannerSvg />
		</section>
	);
};

export default Hero;
