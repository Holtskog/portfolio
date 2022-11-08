import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import styles from './App.module.css';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<Router>
			<Navbar />
			<div className={styles.app}>
				<Routes>
					<Route path='portfolio/' element={<Home />} />
					<Route path='portfolio/about' element={<About />} />
					<Route path='portfolio/contact' element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
