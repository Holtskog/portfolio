import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	const daysYear = () => {
		return new Date().getFullYear();
	};
	return (
		<div className='bg-dark text-light foot'>
			<p className='copyright'>&#169; {daysYear()}</p>
			<p className='scroll' onClick={scrollToTop}>
				To Top
			</p>
			<div className='socials'>
				<a href='https://github.com/Holtskog' target='_blank'>
					<FaGithub />
				</a>
				<a href='https://www.linkedin.com/in/oyvind-holtskog' target='_blank'>
					<FaLinkedin />
				</a>
			</div>
		</div>
	);
}

export default Footer;
