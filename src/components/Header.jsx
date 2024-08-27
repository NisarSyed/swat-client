import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useContact } from "../utils/useContacts";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/donate");
  };

  const { contact } = useContact();

  const [contactInfo, setContactInfo] = useState({
    phone1: "",
    phone2: "",
    email: "",
  });


  useEffect(() => {
    if (contact.length) {
      setContactInfo({
        phone1: contact[0].Phone1,
        phone2: contact[0].Phone2,
        email: contact[0].Email,
      });
    }
  }, [contact]);
  


  return (
    <motion.header
      className="bg-indigo-950 text-white font-raleway antialiased"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0 space-y-1 md:space-y-0 md:space-x-4">
            <a className="flex items-center">
              <Phone className="mr-2" size={16} />
              <span className="text-sm">{contactInfo.phone1}</span>
            </a>
            <a className="flex items-center">
              <Phone className="mr-2 md:hidden" size={16} />
              <span className="text-sm">{contactInfo.phone2}</span>
            </a>
            <a className="flex items-center">
              <Mail className="mr-2" size={16} />
              <span className="text-sm">{contactInfo.email}</span>
            </a>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://www.facebook.com/swatiobm" aria-label="Facebook">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/swatiobm/"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/swat.iobm/"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Logo and Donate button */}
      <div className="bg-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center sm:space-x-32">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/swat.svg"
              alt="Logo"
              className="h-36 sm:h-40 w-auto md:mr-14 align-middle"
            />
            <span className="text-indigo-950 text-2xl md:text-3xl lg:text-4xl font-bold font-raleway text-pretty tracking-wide md:block hidden">
              Social Welfare & Trust IOBM
            </span>
          </div>
          <button
            className="bg-indigo-950 hover:bg-red-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-6 rounded-lg text-lg md:text-md sm:text-xl font-raleway shadow-md antialiased transition duration-300 sm:ml-0"
            onClick={handleClick}
          >
            Donate Now
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
