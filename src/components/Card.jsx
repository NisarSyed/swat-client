import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ navigateTo, image, title, description, onMoreDetails }) => {


  const handleCardClick = () => {
    console.log('Card Clicked');
    navigateTo();
  }
  return (
    <div className='bg-white p-4 rounded-xl shadow-sm font-raleway hover:shadow-2xl tracking-wide z-50'>

      <img src={image} alt={title} className='w-full h-56 object-cover mb-4 rounded hover:scale-105 transition-transform duration-300' loading='lazy' />
      <h3 className='font-bold font-raleway text-xl'>
        {title}
      </h3>
      <p className='text-black mb-4'>{description}</p>
      <button className='bg-indigo-950 text-white px-4 py-2 rounded-xl hover:bg-indigo-7f00 mr-2'
      onClick={handleCardClick}>
        Read more
      </button>
    </div>
  );
}

export default Card;