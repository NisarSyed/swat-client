import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Mail, Phone } from 'lucide-react'


const Header = () => {
  return (
    <header className='bg-indigo-950 text-white start-1 font-raleway'>
        <div className='justify-between items-center p-4 flex'>
            <div className='flex'>
                <a className='flex items-start mr-4'><Phone className='mr-2'/>353453535</a>
                <a className='mr-4 '>535345354</a>
                <a className='flex items-center mr-4 pr-1'><Mail className='mr-2'/>info@swat.com</a>
            </div>
            <div className='flex space-x-4'>
                <a href='https://www.facebook.com/'><FaFacebook className='h-6 w-6'/></a>
                <a href='https://www.youtube.com/'><FaYoutube className='h-6 w-6' /></a>
                <a href='https://www.instagram.com/'><FaInstagram className='h-6 w-6' /></a>

            </div>

        </div>
        <div className="bg-slate-300 p-4 flex items-center justify-center">
            <div className="flex items-center justify-center">
                <img src="swat.svg" alt="Logo" className="h-1/6 w-1/6 mr-2"/>
                <span className="text-slate-900 text-4xl font-extrabold font-serif">Social Welfare & Trust</span>
                </div>
        </div>
    </header>
  )
}

export default Header