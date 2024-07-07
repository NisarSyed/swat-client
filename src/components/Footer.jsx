import React from 'react';

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
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Events', url: '#' },
    { title: 'Our Work', url: '#' },
    { title: 'Contact us', url: '#' },
    { title: 'Activities', url: '#' },
    { title: 'Gift Aid Form', url: '#' },
  ],
  contact: {
    address: 'IFTA Welfare Trust',
    email: 'info@iftawelfaretrust.org',
    phone: '0092 333 3024043',
  },
};

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-indigo-400 underline">Events</h2>
          <ul>
            {footerData.events.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9658;</span>
                <a href={item.url} className="hover:text-indigo-500">{item.title}</a>
              </li>
            ))}
          </ul>
          
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-indigo-400 underline-offset-2">Our Project</h2>
          <ul>
            {footerData.ourWork.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-2 mt-1">&#9658;</span>
                <a href={item.url} className="hover:text-indigo-500">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-indigo-400 underline">Get Involved</h2>
          <ul>
            {footerData.getInvolved.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-indigo-500 mr-2">&#9658;</span>
                <a href={item.url} className="hover:text-indigo-500">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-indigo-400 underline">Contact</h2>
          <p className="flex items-center"><span className="text-indigo-500 mr-2">&#9679;</span>Address: {footerData.contact.address}</p>
          <p className="flex items-center"><span className="text-indigo-500 mr-2">&#9679;</span>Email: {footerData.contact.email}</p>
          <p className="flex items-center"><span className="text-indigo-500 mr-2">&#9679;</span>Phone: {footerData.contact.phone}</p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 SWAT Welfare Trust. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-indigo-500 mr-4">Terms And Condition</a>
          <a href="#" className="hover:text-indigo-500">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;