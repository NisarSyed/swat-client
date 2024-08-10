import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const bankDetails = {
  bankName: 'Bank Name',
  accountTitle: 'Account Title',
  accountNumber: 'Account Number',
  iban: 'IBAN',
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <header className='bg-indigo-950 text-white font-raleway antialiased'>
      <div className='container mx-auto px-4'>
        {/* Top bar */}
        <div className='flex flex-col sm:flex-row justify-between items-center py-2'>
          <div className='flex flex-col sm:flex-row items-center mb-2 sm:mb-0'>
            <a className='flex items-center mb-1 sm:mb-0 sm:mr-4'>
              <Phone className='mr-2' size={16} />
              <span className='text-sm'>353453535</span>
            </a>
            <a className='flex items-center mb-1 sm:mb-0 sm:mr-4'>
              <Phone className='mr-2 sm:hidden' size={16} />
              <span className='text-sm'>535345354</span>
            </a>
            <a className='flex items-center'>
              <Mail className='mr-2' size={16} />
              <span className='text-sm'>info@swat.com</span>
            </a>
          </div>
          <div className='flex space-x-4 mt-2 sm:mt-0'>
            <a href='https://www.facebook.com/swatiobm' aria-label="Facebook">
              <FaFacebook className='h-5 w-5' />
            </a>
            <a href='https://www.linkedin.com/in/swatiobm/' aria-label="LinkedIn">
              <FaLinkedinIn className='h-5 w-5' />
            </a>
            <a href='https://www.instagram.com/swat.iobm/' aria-label="Instagram">
              <FaInstagram className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className='bg-white text-indigo-950 py-4'>
        <div className='container mx-auto h-auto px-4'>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='flex flex-col md:flex-row items-center mb-4 md:mb-0 justify-evenly'>
              <img src='/swat.svg' alt='Logo' className='md:h-56 h-32 w-auto mb-2 md:mb-0 md:mr-4' />
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-raleway tracking-wide text-center md:text-left'>
                Social Welfare & Trust IOBM
              </h1>
            </div>
            <button
              className='bg-indigo-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-lg md:text-xl lg:text-2xl font-raleway shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mt-4 md:mt-0 md:ml-16'
              onClick={handleClick}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Donation modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4'
        >
          <div className='bg-white p-6 rounded-lg shadow-lg text-black font-medium max-w-sm w-full'>
            <h2 className='text-xl font-bold mb-4'>{bankDetails.bankName}</h2>
            <p className='mb-2'>Account Title: {bankDetails.accountTitle}</p>
            <p className='mb-2'>Account Number: {bankDetails.accountNumber}</p>
            <p className='mb-2'>IBAN: {bankDetails.iban}</p>
            <p className='mb-4 text-sm'>
              Please mention the purpose of donation in the description.
            </p>
            <button
              className='bg-indigo-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out'
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;