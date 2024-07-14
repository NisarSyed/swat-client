import React from 'react'
import { Hand, Coins, Book, Heart } from 'lucide-react'


const HelpOption = ({ icon, text, details }) => (
  <div className="group relative bg-white rounded-lg shadow-md overflow-hidden h-72 duration-300 transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div className="py-10 flex flex-col items-center justify-center space-y-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
      {icon}
      <p className="text-indigo-950 font-serif text-center text-2xl">{text}</p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:bottom-1/4">
      <p className="text-indigo-950 font-serif text-center text-xl">{details}</p>
    </div>
  </div>
);

const HelpOptions = () => {
  const options = [
    { 
      icon: <Hand size={50} className="text-indigo-950" />, 
      text: "BECOME VOLUNTEER",
      details: "Join our team and make a difference in your community."
    },
    { 
      icon: <Coins size={50} className="text-indigo-950" />, 
      text: "DONATE GENEROUSLY",
      details: "Your contributions help us continue our mission."
    },
    { 
      icon: <Book size={50} className="text-indigo-950" />, 
      text: "CALL FOR DONATION",
      details: "Email: info@swat.org - Phone: 000 000 000"
    },
    { 
      icon: <Heart size={50} className="text-indigo-950" />, 
      text: "SEND DONATION",
      details: "Every donation, no matter how small, makes a big impact."
    },
  ];

  return (
    <div className="bg-gray-100 p-10 font-serif h-full" style={{ height: "650px" }}>
      <h1 className="text-5xl font-bold text-center mb-8 text-indigo-950 my-5">
        How can you help <span className="text-indigo-500 underline">us</span> ?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        {options.map((option, index) => (
          <HelpOption key={index} icon={option.icon} text={option.text} details={option.details} />
        ))}
      </div>
    </div>
  );
};

export default HelpOptions;