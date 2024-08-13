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
    <motion.header 
      className='bg-indigo-950 text-white start-1 font-raleway h-auto antialiased'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
          <div className='flex space-x-4'>
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

      <div className='bg-white p-4'>
        <div className='flex md:flex-row flex-col items-center justify-evenly'>
          <img src='/swat.svg' alt='Logo' className='h-56 w-auto ' />
          <span className='text-indigo-950 md:text-4xl font-extrabold font-raleway text-pretty tracking-wide'>
            Social Welfare & Trust IOBM
          </span>
          <button
            className='bg-indigo-950 hover:bg-red-700 text-white font-bold sm:py-4 sm:px-8 rounded-lg md:text-2xl font-raleway shadow-xl antialiased text-xl px-4 py-2'
            onClick={handleClick}
          >
          Donate Now
          </button> 
        </div>
        
        
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'
        >
          <div className='bg-white p-8 rounded-lg shadow-lg text-black font-medium'>
            <h2 className='text-2xl font-bold mb-4'>{bankDetails.bankName}</h2>
            <p className='mb-2'>Account Title: {bankDetails.accountTitle}</p>
            <p className='mb-2'>Account Number: {bankDetails.accountNumber}</p>
            <p className='mb-2'>IBAN: {bankDetails.iban}</p>
            <p className='mb-2'>
              Please mention the purpose of donation in the description.
            </p>
            <button
              className='bg-indigo-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4'
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;