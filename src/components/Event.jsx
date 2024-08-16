import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';





const PastEventDetailPage = ({ event }) => {
  return (
    <div className="bg-indigo-950 min-h-screen text-white font-raleway">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
        
        <div className="bg-indigo-900 rounded-lg shadow-lg p-6 mb-8">
          <img src={event.image || "/api/placeholder/800/400"} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          
          <div className="flex flex-wrap items-center text-sm mb-4">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="mr-2 text-red-700" size={18} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="mr-2 text-red-700" size={18} />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <MapPin className="mr-2 text-red-700" size={18} />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="mr-2 text-red-700" size={18} />
              <span>{event.attendees} attendees</span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">{event.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {event.highlights.map((highlight, index) => (
              <div key={index} className="bg-indigo-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
          
          <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            View Gallery
          </button>
        </div>
        
        <div className="bg-indigo-900 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Event Outcomes</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PastEventDetailPage;