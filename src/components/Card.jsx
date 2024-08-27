import React from 'react';

const Card = ({ navigateTo, image, title, children, showDonateButton = true }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      onClick={navigateTo} // Add onClick handler here
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="font-bold font-raleway sm:text-xl text-lg text-indigo-950 mb-4">{title}</h3>
        <div className="flex justify-between items-center px-1">
          {showDonateButton && (
            <button 
              className="bg-red-700 text-white sm:px-2 py-1 rounded-md font-raleway font-semibold transition-colors duration-300 hover:bg-red-800 px-2 sm:text-sm text-sm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card's onClick
                navigateTo();
              }}
            >
              Donate Now
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;