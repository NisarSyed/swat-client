import React from 'react'
import { Hand, Coins, Book, Heart } from 'lucide-react'
import aos from 'aos'

const HelpOption = ({ icon, text, details }) => (

  <div className="group relative bg-white rounded-lg shadow-md overflow-hidden h-auto min-h-[250px] duration-300 transition-shadow hover:shadow-xl hover:shadow-black/30 p-6">
    <div className="py-6 flex flex-col items-center justify-center space-y-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
      {icon}
      <p className="text-indigo-950 font-raleway text-center font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl p-5">{text}</p>
    </div>
    <div className="absolute inset-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center justify-center">
      <p className="text-red-700 font-raleway font-medium text-center text-sm sm:text-base md:text-lg lg:text-xl">{details}</p>
    </div>
  </div>
  
);

const HelpOptions = () => {
  const options = [
    { 
      icon: <Hand size={40} className="text-indigo-950" />, 
      text: "BECOME VOLUNTEER",
      details: "Join our team and make a difference in your community."
    },
    { 
      icon: <Coins size={40} className="text-indigo-950" />, 
      text: "DONATE GENEROUSLY",
      details: "Your contributions help us continue our mission."
    },
    { 
      icon: <Book size={40} className="text-indigo-950" />, 
      text: "CALL FOR DONATION",
      details: "Email: info@swat.org - Phone: 000 000 000"
    },
    { 
      icon: <Heart size={40} className="text-indigo-950" />, 
      text: "SEND DONATION",
      details: "Every donation, no matter how small, makes a big impact."
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-raleway">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 text-indigo-950">
        How can you help <span className="text-red-700 font-raleway">us</span>?
      </h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-4 sm:my-6 md:my-8 lg:my-10">
        {options.map((option, index) => (
          <HelpOption key={index} icon={option.icon} text={option.text} details={option.details} />
        ))}
      </div>
    </div>
  );
};

export default HelpOptions;