import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({title, description, image, onMoreDetails, navigateTo}) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  }


  return (
    <div className='bg-white p-4 rounded-xl shadow-sm font-raleway hover:shadow-2xl tracking-wide' onClick={handleCardClick}>
      <img src={image} alt={title} className='w-full h-56 object-cover mb-4 rounded'/>
      <h3>
        {title}
      </h3>
      <p className='text-gray-700 mb-4'>{description}</p>
      <button className='bg-indigo-950 text-white px-4 py-2 rounded-xl hover:bg-indigo-7f00 mr-2'
      onClick={onMoreDetails}>
        Read more
      </button>
      <button
      className='bg-indigo-950 text-white px-4 py-2 rounded-xl hover:bg-indigo-700'
      onClick={() => navigate('/contact')}
      >
        Donate Now
      </button>
    </div>
  );
}

export default Card