import React, { useState, useEffect } from "react";

function Banner({ banner, text }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <style>
        {`
          .fade-in {
            opacity: 0;
            transition: opacity 3s ease-in-out;
          }
          .fade-in.visible {
            opacity: 1;
          }
          .underline-custom::after {
            content: "";
            display: block;
            width: 75%;
            height: 5px;
            background-color: #EF4444;
            margin: 0 0 0 auto;
            padding: 2px;
            border-radius: 10px;
          }
        `}
      </style>

      <div className="relative h-64 md:h-96">
        <img
          src={banner.image}
          alt={banner.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-950 bg-opacity-80 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/0">
          <h1
            className={`px-3 text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold font-raleway text-center fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;