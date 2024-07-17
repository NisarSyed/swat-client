import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Mail, Phone } from 'lucide-react'


const Header = () => {
  return (
    <header className='bg-indigo-950 text-white start-1 font-raleway h-auto'>
        <div className='justify-between items-center p-4 flex'>
            <div className='flex'>
                <a className='flex items-start mr-4'><Phone className='mr-2'/>353453535</a>
                <a className='mr-4 '>535345354</a>
                <a className='flex items-center mr-4 pr-1'><Mail className='mr-2'/>info@swat.com</a>
            </div>
            <div className='flex space-x-4'>
                <a href='https://www.facebook.com/swatiobm'><FaFacebook className='h-6 w-6'/></a>
                <a href='https://www.linkedin.com/in/swatiobm/'><FaLinkedinIn className='h-6 w-6' /></a>
                <a href='https://www.instagram.com/swat.iobm/'><FaInstagram className='h-6 w-6' /></a>

            </div>

        </div>
        <div className="bg-white p-2 flex items-center justify-center relative">
            <div className="flex items-center justify-center">
                <img src="swat.svg" alt="Logo" className="h-56 w-auto mr-10"/>
                <span className="text-slate-900 text-4xl font-extrabold font-serif">Social Welfare & Trust IOBM</span>
                </div>
        </div>
    </header>
  )
}

export default Header