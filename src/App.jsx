import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Drives from './pages/Drives';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import DriveDetail from './pages/DriveDetail';
import ProjectDetail from './pages/ProjectDetail';
import useDrives from './components/useDrives';
import useProjects from './components/useProjects';
import { MdProductionQuantityLimits } from 'react-icons/md';


function App() {

  const {drives, getDriveById} = useDrives();
  const {projects, getProjectById} = useProjects();
  


  return (
    <Router>
      <div className='relative'>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/drives" element={<Drives drives={drives} />} />
          <Route path="/drives/:id" element={<DriveDetail getDriveById={getDriveById} />} />
          <Route path="/projects" element={<Projects projects={projects} showBanner={true} />} />
          <Route path="/projects/:id" element={<ProjectDetail getProjectById={getProjectById} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;