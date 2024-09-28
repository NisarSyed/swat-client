import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass =
    "nav-link text-white rounded-md text-base md:text-lg lg:text-xl font-raleway font-bold tracking-wider hover:text-gray-300 transition duration-300";
  const mobileNavLinkClass =
    "block py-2 px-4 text-white hover:bg-indigo-800 text-lg font-raleway font-bold tracking-wider transition duration-300";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-indigo-950 font-raleway uppercase top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div className="hidden md:flex md:justify-center mx-auto">
            <div className="flex space-x-4 lg:space-x-20 md:space-x-12">
              <Link to="/" className={navLinkClass}>
                Home
              </Link>
              <Link to="/about" className={navLinkClass}>
                About
              </Link>
              <Link to="/drives" className={navLinkClass}>
                Drives
              </Link>
              <Link to="/projects" className={navLinkClass}>
                Projects
              </Link>
              <Link to="/events" className={navLinkClass}>
                Events
              </Link>
              <Link to="/contact" className={navLinkClass}>
                Contact
              </Link>
            </div>
          </div>

          {/* Social media icons for mobile view */}
          <div className="md:hidden flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={mobileNavLinkClass}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={mobileNavLinkClass}
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/drives"
              className={mobileNavLinkClass}
              onClick={toggleMobileMenu}
            >
              Drives
            </Link>
            <Link
              to="/projects"
              className={mobileNavLinkClass}
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="/events"
              className={mobileNavLinkClass}
              onClick={toggleMobileMenu}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={mobileNavLinkClass}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;