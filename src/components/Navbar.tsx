import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
	const location = useLocation();
	const navigate = useNavigate();
	console.log('activeLink class = ' + styles.activeLink);
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<NavLink to={'/'} className={styles.navbar__logo__text}>
					LOGO
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