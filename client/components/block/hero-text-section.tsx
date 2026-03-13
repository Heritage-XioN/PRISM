import React from 'react';

const HeroTextSection = () => {
	return (
		<div className='grid grid-cols-1 gap-7'>
			{/* hero header */}
			<h1 className='text-7xl font-bold text-white'>
				The Future of <span className=''>AI Talent</span> Intelligence
			</h1>
			{/* hero text */}
			<p className='text-[#F3F4F6] text-[18px] leading-7'>
				Revolutionize your talent strategy with PRISM, the AI-powered platform
				that delivers predictive insights and intelligent matching to unlock
				your organization's full potential.
			</p>
			{/* hero buttons */}
			<div className='flex gap-8'>
				<button className='bg-white text-[#7c3aed] px-12 py-3 rounded-sm text-[18px] leading-7 font-bold shadow-lg cursor-pointer'>
					Get Started
				</button>
				<button className='bg-[#7c3aed] text-white px-12 py-3 rounded-sm text-[18px] leading-7 font-bold shadow-lg cursor-pointer'>
					Learn More
				</button>
			</div>
		</div>
	);
};

export default HeroTextSection;
