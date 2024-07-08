import React, {useEffect} from 'react';

const About = () => {

  const [isVisible, setIsVisible] = React.useState(false);
  useEffect(() => {
    setIsVisible(true);
  }
  , []);


  const banners = [

    { id: 3, src: "2024-04-04_18-04-07_UTC_7.jpg", alt: "Banner 3" },
  ];

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
      <div className="relative ">
      {banners.map((banner) => (
            <div key={banner.id} className="relative h-90 md:h-96">
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
    
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-50 flex items-center justify-left">
          <div className="text-center">
            <h1 className={`px-3 sm:text-2xl md:text-4xl lg:text-4xl text-white font-bold font-raleway text-gray  fade-in ${isVisible ? 'visible' : ''}`} >
              Welcome to About Page
            </h1>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
