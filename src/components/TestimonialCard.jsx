import React from 'react';

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <p className="text-sm sm:text-base text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-sm sm:text-base text-indigo-700 font-semibold">- {author}</p>
  </div>
);

export default React.memo(TestimonialCard);