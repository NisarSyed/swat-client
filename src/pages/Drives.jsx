import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const driveData = {
  
    id: 1,
    title: 'Drive 1',
    description: 'This is the first drive',
    image: [
      
    ]
};    

const banner = {
  id: 1,
  src: 'banner.jpg',
  alt: 'Banner 1',
};

const Drives = () => {
  const { id } = useParams();
  const drive = driveData[id];

  if (!drive) {
    return <h1>Drive not found</h1>;
  }

  const [isVisible, setIsVisible] = React.useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <>
      <style>
        {`
          .fade-in {
            opacity: 0;
            transition: opacity 3s ease-in-out;
          }
          .fade-in.visible {
            opacity: 1;
          }
        `}
      </style>
      <div className="relative">

          <div key={banner.id} className="relative h-100 md:h-96">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
          </div>
      

        <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-50 flex items-center justify-left bg-gradient-to-t from-black/75 via-black/0">
          <div className="text-center">
            <h1
              className={`px-3 sm:text-2xl md:text-4xl lg:text-4xl text-white font-bold font-raleway text-gray fade-in ${
                isVisible ? 'visible' : ''
              }`}
            >
              {drive.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="text-left font-serif px-5 mt-10">
        <h2 className="text-4xl font-bold text-pretty antialiased accent-slate-200 text-indigo-900">{driveData.id}</h2>
      </div>
      <div className="flex flex-row mt-6 px-20">
        <div className="basis-1/3 p-2 flex-wrap">
          <img src="2024-04-07_17-58-36_UTC_7" alt="Our mission" className="w-full h-48 object-cover mb-4 rounded" />
        </div>
        <div className="basis-2/3 p-2 flex-wrap" >
          <p>

          </p>
        </div>
      </div>
    </>
  );
}

export default Drives;