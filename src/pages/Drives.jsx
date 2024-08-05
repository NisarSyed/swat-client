import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Share2 } from 'lucide-react';
import Banner from '../components/Banner';
import DrivesCard from '../components/DrivesCard';
import { useNavigate } from 'react-router';

const Drives = ({ drives }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDrives, setFilteredDrives] = useState(drives);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredDrives(drives.filter(drive => 
      drive.title.toLowerCase().includes(term) || 
      drive.description.toLowerCase().includes(term)
    ));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Banner banner={{
        id: 1,
        src: 'JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg',
        alt: 'Banner 1',
      }} text="Drives" />
      
      <div className="container mx-auto px-4 py-8 mt-5">
        <h2 className="text-5xl font-bold text-indigo-950 mb-4 font-raleway">Our Drives</h2>
        <p className="text-xl text-indigo-900 mb-8">
          Join us in making a difference. Our drives are the heart of our mission to support and uplift our community.
        </p>

        {/* Search and filter section */}
        <div className="flex items-center mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search drives..."
              className="w-full p-3 pl-10 rounded-lg border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none hover:bg-gray-50"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-3 text-indigo-400" />
          </div>
          <button className="ml-4 p-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300">
            <Filter />
          </button>
        </div>

        {/* Featured drive */}
        {filteredDrives.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-indigo-950 to-indigo-800 rounded-lg p-6 mb-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-2">Featured Drive: {filteredDrives[0].title}</h3>
            <p className="mb-4">{filteredDrives[0].description}</p>
            <button 
              onClick={() => navigate(`/drives/${filteredDrives[0].id}`)}
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Learn More
            </button>
          </motion.div>
        )}

        {/* Drives grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrives.map((drive) => (
            <motion.div
              key={drive.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DrivesCard
                title={drive.title}
                description={drive.description}
                image={drive.images[0]}
                navigateTo={() => navigate(`/drives/${drive.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drives;