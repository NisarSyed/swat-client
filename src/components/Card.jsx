import React from 'react';

const Card = ({ navigateTo, image, title, children }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="font-bold font-raleway text-xl text-indigo-950 mb-4">{title}</h3>
        <div className="flex justify-between items-center px-1">
        <button 
          className="bg-red-700 text-white px-4 py-2 rounded-md font-raleway font-semibold transition-colors duration-300 hover:bg-red-800"
          onClick={navigateTo}
        >
          View
        </button>
        {children}
        </div>
        </div>
      </div>
  
  );
}

export default Card;