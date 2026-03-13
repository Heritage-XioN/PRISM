import React from 'react';
import NavbarButtonSection from '../block/navbar-button-section';
import NavbarLinksSection from '../block/navbar-links-section';
import NavbarLogoSection from '../block/navbar-logo-section';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center bg-linear-to-r from-[#4f2099] via-[#6637bd] to-[#8152e7] px-4 py-4'>
			<NavbarLogoSection />
			<NavbarLinksSection />
			<NavbarButtonSection />
		</nav>
	);
};

export default Navbar;
