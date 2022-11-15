import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from './components/bars/Footer';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='portfolio/' element={<Home />} />
						<Route path='portfolio/about' element={<About />} />
						<Route path='portfolio/contact' element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		);
	}
}

export default App;
