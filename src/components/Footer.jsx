import React, { useEffect } from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Mail, Phone, MapPinIcon , ChevronRight} from 'lucide-react';
import { useProjects } from '../utils/useProjects';
import { useDrives } from '../utils/useDrives';
import { useEvents } from '../utils/useEvents';
import { useContact } from '../utils/useContacts';
import { useState } from 'react';





const EventItem = ({ item }) => (
  <li className="flex items-center">
    <span className="text-indigo-500 "><ChevronRight/></span>
    <a href={item.url} className="hover:text-indigo-500 hover:scale-105 hover:translate-x-3 duration-300">{item.title}</a>
  </li>
);

const OurWorkItem = ({ item }) => (
  <li className="flex items-center">
    <span className="text-indigo-500  "><ChevronRight/></span>
    <a href={item.url} className="hover:text-indigo-500 hover:scale-105 hover:translate-x-3 duration-300">{item.title}</a>
  </li>
);

const GetInvolvedItem = ({ item }) => (
  <li className="flex items-center">
    <span className="text-indigo-500 "><ChevronRight/></span>
    <a href={item.url} className="hover:text-indigo-500 hover:scale-105 hover:translate-x-3 duration-300">{item.title}</a>
  </li>
);

const ContactInfo = ({ icon, text }) => (
  <p className="flex items-center justify-start">
    <span className="text-indigo-500 ">{icon}</span>
    {text}
  </p>
);

const Footer = () => {
  const { projects } = useProjects();
  const { drives } = useDrives();
  const { events } = useEvents();
  const { contact } = useContact();

  const [footerData, setFooterData] = useState({
    events: [],
    ourWork: [],
    getInvolved: [],
    contact: {
      address: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (events.length && drives.length && contact.length) {
      setFooterData({
        events: events.map(event => ({ title: event.title, url: `/events/${event._id}` })),
        ourWork: drives.map(drive => ({ title: drive.title, url: `/drives/${drive._id}` })),
        getInvolved: [
          { title: 'Home', url: '/' },
          { title: 'About Us', url: '/about' },
          { title: 'Our Projects', url: '/projects' },
          { title: 'Drives', url: '/drives' },
          { title: 'Contact us', url: '/contact' },
        ],
        contact: {
          address: 'Plot # 84, Korangi Creek, Karachi, Pakistan',
          email: contact[0]?.Email || '',
          phone: `${contact[0]?.Phone1 || ''}, ${contact[0]?.Phone2 || ''}`,
        },
      });
    }
  }, [events, drives, contact]);
  
  // const footerData = {
  //   events: [
  //     { title: 'Event 1', url: '/events/1' },
  //     { title: 'Event 2', url: '/events/2' },
  //     { title: 'Event 3', url: '/events/3' },
  //     { title: 'Event 4', url: '/events/4' },
  //   ],
  //   ourWork: [
  //     { title: 'Drive 1', url: '/drives/1' },
  //     { title: 'Drive 2', url: '/drives/2' },
  //     { title: 'Drive 3', url: '/drives/3' },
  //     { title: 'Drive 4', url: '/drives/4' },
  //   ],
  //   getInvolved: [
  //     { title: 'Home', url: '/' },
  //     { title: 'About Us', url: '/about' },
  //     { title: 'Our Projects', url: '/projects' },
  //     { title: 'Drives', url: '/drives' },
  //     { title: 'Contact us', url: '/contact' },
  //   ],
  //   contact: {
  //     address: 'Plot # 84, Korangi Creek, Karachi, Pakistan',
  //     email: '',
  //     phone: '',
  //   },
  // };





  return (
    <div className='relative '>
    <footer className="bg-indigo-950 text-white p-8 font-raleway text-lg tracking-wide">
      <div className="flex md:flex-row flex-col justify-between mx-auto max-w-auto px-10">
        <div className="flex flex-col space-y-4 ml-2 sm:mb-0 mb-10 tracking-wide">
          <h2 className="sm:text-2xl text-2xl flex-col font-bold mb-4 text-indigo-400 tracking-wide">Events</h2>
          <ul>
            {footerData.events.map((item, index) => (
              <EventItem key={index} item={item} />
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4 ml-2 md:mb-0 mb-10">
          <h2 className="sm:text-2xl text-2xl font-bold mb-4 text-indigo-400 tracking-wide">Our Projects</h2>
          <ul>
            {footerData.ourWork.map((item, index) => (
              <OurWorkItem key={index} item={item} />
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4 ml-2 md:mb-0 mb-10">
          <h2 className="sm:text-2xl text-2xl font-bold mb-4 text-indigo-400 tracking-wide">Get Involved</h2>
          <ul>
            {footerData.getInvolved.map((item, index) => (
              <GetInvolvedItem key={index} item={item} />
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4 sm:ml-6 md:mb-0 mb-10 ml-4">
          <h2 className="sm:text-2xl text-2xl font-bold mb-4 text-indigo-400 tracking-wide">Contact</h2>
          <ContactInfo icon={<MapPinIcon className='pr-1 mr-1' size={24}/>} text={`Address: ${footerData.contact.address}`} />
          <ContactInfo icon={<Mail className='pr-1 mr-1' size={24}/>} text={`Email: ${footerData.contact.email}`} />
          <ContactInfo icon={<Phone className='pr-1 mr-1' size={24}/>} text={`Phone: ${footerData.contact.phone}`} />
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;