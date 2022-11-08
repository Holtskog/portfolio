import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoQrCodeOutline } from 'react-icons/io5';
import './Navbar.css';

function Navbar() {
	const logo = '  LOGO';
	const url = useLocation();
	let hasRemoved = false;

	console.log('url path = ' + url.pathname);
	return (
		<div className='navbar bg-dark'>
			<div className='navbar__logo bg-light'>
				<NavLink
					to={'portfolio/'}
					className='navbar__logo__text text-dark text-hover-dark'
				>
					<IoQrCodeOutline />
					{logo}
				</NavLink>
			</div>
			<nav className='navbar__navList'>
				<NavLink to={'portfolio/'} id='home' className='navbar__navList__link'>
					<span className='navbar__navList__link__text'>Home</span>
				</NavLink>
				<NavLink to={'portfolio/about'} className='navbar__navList__link'>
					<span className='navbar__navList__link__text'>About</span>
				</NavLink>
				<NavLink to={'portfolio/contact'} className='navbar__navList__link'>
					<span className='navbar__navList__link__text'>Contact Me</span>
				</NavLink>
			</nav>
		</div>
	);
}

export default Navbar;
