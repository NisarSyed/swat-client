import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { useContact } from '../utils/useContacts';
const Contact = () => {




  const banner = {
    id: 1,
    image: 'JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg',
    alt: 'Banner 1',
  };


  const contactInfo = 
    {
      address: 'Korangi Creek, Karachi, Pakistan',
      phone: '+92 21 111 002 004',
      hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
      email: '',
    }
  ;

  return (
    <div>
    <Banner text="Contact Us" banner={banner} />
    <div className="bg-gray-100 font-raleway text-gray-800">
      <div className="container mx-auto px-4 py-12">
        
        <div className="flex flex-wrap -mx-4">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="bg-indigo-950 text-white text-xl font-semibold p-4 text-center">About us</h2>
              <ul>
                {['About Us'].map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    className="p-4 border-b last:border-b-0"
                  >
                    <a href="/about" className="flex items-center">
                      <span>{link}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-indigo-900 mr-4 text-xl" />
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-indigo-900 mr-4 text-xl" />
                <p>{contactInfo.phone}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-indigo-900 mr-4 text-xl" />
                <p>{contactInfo.hours}</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-900 mr-4 text-xl" />
                <p>{contactInfo.email}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
              <p className="mb-4">Stay updated with our latest news and offers by following us on social media:</p>
              <div className="flex space-x-4">
                {[
                  { Icon: FaFacebookF, color: 'bg-blue-600', link: 'https://facebook.com/swatiobm' },
                  { Icon: FaTwitter, color: 'bg-blue-400', link: 'https://twitter.com/example' },
                  { Icon: FaInstagram, color: 'bg-pink-600', link: 'https://instagram.com/swat.iobm/' },
                  { Icon: FaLinkedinIn, color: 'bg-blue-700', link: 'https://linkedin.com/company/example' }
                ].map(({ Icon, color, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`${color} text-white p-2 rounded-xl`}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.832910591034!2d67.11586507815315!3d24.81275254440822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b7680aed395%3A0x21d3c8026afe14ce!2sInstitute%20of%20Business%20Management!5e0!3m2!1sen!2s!4v1723896896489!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;