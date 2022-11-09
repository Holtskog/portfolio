import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import './App.css';

function App() {
	// const [count, setCount] = useState(0);
	console.log(`base path:`);
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
		</Router>
	);
}

export default App;
