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
    <header className='bg-indigo-950 text-white start-1 font-raleway h-auto antialiased'>
      <div className='justify-between items-center p-4 flex'>
        <div className='flex'>
          <a className='flex items-start mr-4'>
            <Phone className='mr-2' />
            353453535
          </a>
          <a className='mr-4 '>535345354</a>
          <a className='flex items-center mr-4 pr-1'>
            <Mail className='mr-2' />
            info@swat.com
          </a>
        </div>
        <div className='flex space-x-4'>
          <a href='https://www.facebook.com/swatiobm'>
            <FaFacebook className='h-6 w-6' />
          </a>
          <a href='https://www.linkedin.com/in/swatiobm/'>
            <FaLinkedinIn className='h-6 w-6' />
          </a>
          <a href='https://www.instagram.com/swat.iobm/'>
            <FaInstagram className='h-6 w-6' />
          </a>
        </div>
      </div>
      <div className='bg-white p-2 flex items-center justify-center'>
        <div className='flex items-center justify-center'>
          <img src='swat.svg' alt='Logo' className='h-56 w-auto mr-10 ml-10' />
          <span className='text-indigo-950 text-5xl font-extrabold font-raleway text-pretty tracking-wide'>
            Social Welfare & Trust IOBM
          </span>
        </div>
        <div className='ml-40'>
          <button
            className='bg-indigo-950 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-2xl font-raleway shadow-xl antialiased'
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
    </header>
  );
};

export default Header;