import React from 'react';


// Data array objects
const footerData = {
  description: "Plot # 84, Korangi Creek, Karachi, Pakistan, 75190",
  events: [
    { title: "Event1", link: "#" },
    { title: "Event2", link: "#" },
    { title: "Event3", link: "#" },
    { title: "Event4", link: "#" }
  ],
  ourWork: [
    { id:1,title: "Project1", link: "#" },
    { id:2,title: "Project2", link: "#" },
    { id:3,title: "Project3", link: "#" },
    { id:4,title: "Project4", link: "#" }
  ],
  getInvolved: [
    { id:1, title: "Home", link: "#" },
    { id:2, title: "About Us", link: "#" },
    { id:3, title: "Events", link: "#" },
    { id:4, title: "Our Work", link: "#" },
    { id:5, title: "Contact us", link: "#" },
  ],
  contact: {
    address: "",
    email: "",
    phone: ""
  }
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Upper Footer Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src="swat.svg" alt="Swat" className="h-25 w-24 mb-2" />
            <p className="text-sm">{footerData.description}</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Events</h3>
            <ul>
              {footerData.events.map((event, index) => (
                <li key={index} className="mb-2">
                  <a href={event.link} className="hover:text-blue-500 hover:underline">{event.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Our Projects</h3>
            <ul>
              {footerData.ourWork.map((work, index) => (
                <li key={index} className="mb-2">
                  <a href={work.link} className="hover:text-blue-500 hover:underline">{work.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul>
              {footerData.getInvolved.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.link} className="hover:text-blue-500 hover:underline">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i>Address: {footerData.contact.address}</p>
            <p className="mb-2"><i className="fas fa-envelope mr-2"></i>Email: {footerData.contact.email}</p>
            <p className="mb-2"><i className="fas fa-phone mr-2"></i>Phone: {footerData.contact.phone}</p>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">&copy; SWAT Welfare Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;