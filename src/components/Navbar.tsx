import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { IoQrCodeOutline } from 'react-icons/io5';
import styles from './Navbar.module.css';

function Navbar() {
	const logo = '  LOGO';
	console.log('activeLink class = ' + styles.activeLink);
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<NavLink to={'/'} className={styles.navbar__logo__text}>
					<IoQrCodeOutline />
					{logo}
				</NavLink>
			</div>
			<nav className={styles.navbar__navList}>
				<NavLink to={'/'} className={styles.navbar__navList__link}>
					<span className={styles.navbar__navList__link__text}>Home</span>
				</NavLink>
				<NavLink to={'about'} className={styles.navbar__navList__link}>
					<span className={styles.navbar__navList__link__text}>About</span>
				</NavLink>
				<NavLink to={'contact'} className={styles.navbar__navList__link}>
					<span className={styles.navbar__navList__link__text}>Contact Me</span>
				</NavLink>
			</nav>
		</div>
	);
}

export default Navbar;
