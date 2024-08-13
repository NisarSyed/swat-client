import { useState } from "react";
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, X } from 'lucide-react';


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
        <h2 className="text-4xl font-semibold text-indigo-950 mb-8 pl-4">Our Gallery</h2>
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
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
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


export default ImageGallery;