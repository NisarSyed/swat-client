import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Drives from './pages/Drives';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import EnhancedHeader from './components/EnhancedHeader';



function App() {
  return (
    <Router>
      <div className='flex-col'>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;