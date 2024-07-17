import React from 'react';
import Banner from '../components/Banner';


const handleSubmit = () =>
{
  console.log("Form submitted");

}
// Data object arrays
const sidebarLinks = [
  { href: "/about", text: "About Us" },
  { href: "/contact", text: "Contact us" },
];

const officeInfo = [
  {
    name: "Pakistan Office",
    details: [
      { icon: "fas fa-map-marker-alt", text: "Plot # 84, Korangi Creek, Karachi,Pakistan, 75190" },
      { icon: "fas fa-phone", text: "92-21-3663-1330" },
      { icon: "far fa-clock", text: "Mon-Sat 9am - 5pm" },
    ],
  },
];

const formFields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "tel", placeholder: "Phone" },
  { name: "subject", type: "text", placeholder: "Subject" },
];

const banner =
  { id: 3, src: "2024-04-07_17-58-36_UTC_7.jpg", alt: "Banner 3" }

const Contact = () => {
  return (
    <div className="bg-white font-raleway text-xl">
      
      <Banner banner={banner} text="Contact Us" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="bg-indigo-950 rounded-t-lg">
              <h2 className="text-white text-xl font-semibold p-4">About us</h2>
            </div>
            <ul className="bg-gray-100 rounded-b-lg">
              {sidebarLinks.map((link, index) => (
                <li key={index} className="p-4 hover:bg-gray-200">
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-3/4 px-4">
            <div className="flex flex-wrap -mx-4">
              {officeInfo.map((office, index) => (
                <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{office.name}</h2>
                  {office.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="mb-2">
                      <i className={`${detail.icon} mr-2`}></i>{detail.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
              <div className="flex flex-wrap -mx-2 mb-4">
                {formFields.map((field, index) => (
                  <div key={index} className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full p-2 rounded border"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" rows="5" className="w-full p-2 rounded border"></textarea>
              </div>
              <button type="submit" className="bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-800" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;