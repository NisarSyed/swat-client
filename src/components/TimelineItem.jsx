import React from 'react';

const TimelineItem = ({ year, title, description }) => (
  <div className="flex p-4 sm:p-6">
    <div className="flex flex-col items-center mr-4">
      <div className="w-px h-full bg-indigo-300"></div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm sm:text-base">{year}</span>
      </div>
    </div>
    <div className="pb-0">
      <h3 className="text-xl sm:text-2xl font-bold text-indigo-700">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700">{description}</p>
    </div>
  </div>
);

export default React.memo(TimelineItem);