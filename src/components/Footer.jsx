import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Mail, Phone, MapPinIcon , ChevronRight} from 'lucide-react';
import { useProjects } from '../utils/useProjects';
import { useDrives } from '../utils/useDrives';
import { useEvents } from '../utils/useEvents';


const footerData = {
  events: [
    { title: 'Earthquake Relief Effort Gilgit Baltistan', url: '#' },
  ],
  ourWork: [
    { title: 'CLEAN DRINKING WATER PROJECT', url: '#' },
    { title: 'AFTER SCHOOL & TUITION CENTER - BALDIA TOWN', url: '#' },
    { title: 'HEALTH CARE PROJECT', url: '#' },
    { title: 'HIGHER EDUCATION SUPPORT PROGRAM', url: '#' },
  ],
  getInvolved: [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about' },
    { title: 'Our Projects', url: '/projects' },
    { title: 'Drives', url: '/drives' },
    { title: 'Contact us', url: '/contact' },
  ],
  contact: {
    address: 'SWAT Welfare Society IOBM',
    email: 'info@swat.org',
    phone: '0092 333 3024043',
  },
};

const EventItem = ({ item }) => (
  <li className="flex items-center">
    <span className="text-indigo-500 mr-2"><ChevronRight/></span>
    <a href={item.url} className="hover:text-indigo-500 hover:scale-105 hover:translate-x-3 duration-300">{item.title}</a>
  </li>
);

const OurWorkItem = ({ item }) => (
  <li className="flex items-center">
    <span className="text-indigo-500 mr-2 mt-1"><ChevronRight/></span>
    <a href={item.url} className="hover:text-indigo-500 hover:scale-105 hover:translate-x-3 duration-300">{item.title}</a>
  </li>
);

const GetInvolvedItem = ({ item }) => (
  <li className="flex items-center">
    <span className="text-indigo-500 mr-2"><ChevronRight/></span>
    <a href={item.url} className="hover:text-indigo-500 hover:scale-105 hover:translate-x-3 duration-300">{item.title}</a>
  </li>
);

const ContactInfo = ({ icon, text }) => (
  <p className="flex items-center">
    <span className="text-indigo-500 mr-2">{icon}</span>
    {text}
  </p>
);

const Footer = () => {
  return (
    <div className='relative '>
    <footer className="bg-indigo-950 text-white p-8 font-raleway">
      <div className="flex md:flex-row flex-col justify-evenly mx-auto max-w-auto px-2">
        <div className="flex flex-col space-y-4 ml-2 sm:mb-0 mb-10">
          <h2 className="text-2xl flex-col font-bold mb-4 text-indigo-400">Events</h2>
          <ul>
            {footerData.events.map((item, index) => (
              <EventItem key={index} item={item} />
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4 ml-2 md:mb-0 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Our Project</h2>
          <ul>
            {footerData.ourWork.map((item, index) => (
              <OurWorkItem key={index} item={item} />
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4 ml-2 md:mb-0 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Get Involved</h2>
          <ul>
            {footerData.getInvolved.map((item, index) => (
              <GetInvolvedItem key={index} item={item} />
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4 ml-6 md:mb-0 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Contact</h2>
          <ContactInfo icon={<MapPinIcon className='pr-1 mb-1'/>} text={`Address: ${footerData.contact.address}`} />
          <ContactInfo icon={<Mail className='pr-1 mb-1'/>} text={`Email: ${footerData.contact.email}`} />
          <ContactInfo icon={<Phone className='pr-1 mb-1'/>} text={`Phone: ${footerData.contact.phone}`} />
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;