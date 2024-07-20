import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';

const ImageGallery = ({ images }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
    {console.log(images)}
    {images.map((img, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img  
          src={img} 
          alt={`Gallery image ${index + 1}`} 
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
);

const DriveDetail = ({getDriveById}) => {
  const { id } = useParams();

  const drive = getDriveById(id);

  if (!drive) {
    return <div>Drive not found</div>;
  }

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen font-raleway">
      <div className="bg-indigo-950 h-64 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 to-red-700 opacity-75"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">{drive.title}</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative mt-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden -mt-16 relative z-20">
          <div className="p-8">
            <p className="text-indigo-950 text-xl tracking-wide leading-relaxed mb-6">{drive.description}</p>
            <div className="flex flex-wrap gap-6 text-indigo-950">
              <div className="flex items-center">
                <Calendar className="mr-2 text-red-700" />
                <span>{drive.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-red-700" />
                <span>{drive.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 text-red-700" />
                <span>{drive.volunteers} Volunteers</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-indigo-950 mb-4">Our Gallery</h2>
          {drive.images && (<ImageGallery images={drive.images} />)}
        </div>
        </div>
      </div>
  );
};

export default DriveDetail;