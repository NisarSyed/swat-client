import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, X } from 'lucide-react';
import { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    setSelectedImage((prev) => {
      const newIndex = (prev + direction + images.length) % images.length;
      return newIndex;
    });
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-indigo-950 mb-6">Our Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 px-4">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img  
              src={img} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <img 
              src={images[selectedImage]} 
              alt={`Full size image ${selectedImage + 1}`} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-300"
            >
              <X size={30} />
            </button>
            <button 
              onClick={() => navigateImage(-1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-indigo-300 transition-colors duration-300"
            >
              &#10094;
            </button>
            <button 
              onClick={() => navigateImage(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-indigo-300 transition-colors duration-300"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
const ProjectDetail = ({getProjectbyId}) => {
  const { id } = useParams();

  const project = getProjectbyId(id);
  console.log(project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen font-raleway">
      <div className="bg-indigo-950 h-64 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 to-red-700 opacity-75"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">{project.title}</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative mt-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden -mt-16 relative z-20">
          <div className="p-8">
            <p className="text-indigo-950 text-xl tracking-wide leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-6 text-indigo-950">
              {/* <div className="flex items-center">
                <Calendar className="mr-2 text-red-700" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-red-700" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 text-red-700" />
                <span>{project.volunteers} Volunteers</span>
              </div> */}
            </div>
          </div>
        </div>

        
        <ImageGallery images={project.images} />
        </div>
      </div>
  );
};

export default ProjectDetail;