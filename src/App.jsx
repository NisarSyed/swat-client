import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Drives from "./pages/Drives";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Header2 from "./components/Header2";
import DriveDetail from "./pages/DriveDetail";
import ProjectDetail from "./pages/ProjectDetail";
import EventDetail from "./pages/EventDetail";
import { DrivesProvider } from "./utils/useDrives.jsx";
import { ProjectsProvider } from "./utils/useProjects.jsx";
import { EventsProvider } from "./utils/useEvents.jsx";
import DonationInfoPage from "./pages/Donate.jsx";

function App() {
  return (
    <EventsProvider>
      <DrivesProvider>
        <ProjectsProvider>
          <Router>
            <Header2 />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/drives" element={<Drives showBanner={true} />} />
              <Route path="/drives/:id" element={<DriveDetail />} />
              <Route
                path="/projects"
                element={<Projects showBanner={true} />}
              />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/events" element={<Events showBanner={true} />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<DonationInfoPage />} />
            </Routes>
            <Footer />
          </Router>
        </ProjectsProvider>
      </DrivesProvider>
    </EventsProvider>
  );
}

export default App;
