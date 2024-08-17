import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Drives from './pages/Drives';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header.jsx';
import DriveDetail from './pages/DriveDetail';
import ProjectDetail from './pages/ProjectDetail';
import { DrivesProvider } from './components/useDrives.jsx';
import { ProjectsProvider } from './components/useProjects.jsx';
import DonationInfoPage from './pages/Donate.jsx';

function App() {
  return (
    <DrivesProvider>
      <ProjectsProvider>
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/drives" element={<Drives showBanner={true} />} />
            <Route path="/drives/:id" element={<DriveDetail />} />
            <Route path="/projects" element={<Projects showBanner={true} />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<DonationInfoPage />} />
          </Routes>
          <Footer />
        </Router>
      </ProjectsProvider>
    </DrivesProvider>
  );
}

export default App;