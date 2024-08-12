import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = "nav-link text-white rounded-md text-base md:text-lg lg:text-2xl font-raleway font-bold tracking-wider";
  const mobileNavLinkClass = "block py-2 px-4 text-white hover:bg-indigo-800 text-lg font-raleway font-bold tracking-wider";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-950 font-raleway uppercase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="hidden md:flex md:justify-center md:flex-grow">
            <div className="flex space-x-4 lg:space-x-24">
              <Link to="/" className={navLinkClass}>Home</Link>
              <Link to="/about" className={navLinkClass}>About</Link>
              <Link to="/drives" className={navLinkClass}>Drives</Link>
              <Link to="/projects" className={navLinkClass}>Projects</Link>
              <Link to="/contact" className={navLinkClass}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" className={mobileNavLinkClass} onClick={toggleMobileMenu}>About</Link>
          <Link to="/drives" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Drives</Link>
          <Link to="/projects" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Projects</Link>
          <Link to="/contact" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;