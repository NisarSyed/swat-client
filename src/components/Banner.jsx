import React, { useEffect } from 'react';

function Banner({ banner, text }) {

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
          .h2 {
            font-size: 2rem;
            position: absolute;
          
          }
          .underline-custom::after {
          content: "";
            display: block;
            width: 75%;
            height: 5px;
            background-color: #EF4444
;
            margin: 0 0 0 auto;
          }
        `}
      </style>
      <div className="relative">
        <div key={banner.id} className="relative md:h-96">
          <img
            src={banner.src}
            alt={banner.alt}
            className="w-full h-full object-cover"
          />
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-70 flex items-center justify-left bg-gradient-to-t from-black/80 via-black/0">
          <div className="text-center justify-items-start">
            <h1
              className={`px-3 sm:text-4xl md:text-5xl lg:text-4xl text-white font-bold font-raleway text-gray fade-in ${
                isVisible ? 'visible' : ''
              }`}
            >
              Welcome to {text} Page
            </h1>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }
  
  export default Banner;