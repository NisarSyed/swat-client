import React, { useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const banners = [
    { id: 3, src: "2024-04-07_17-58-36_UTC_7.jpg", alt: "Banner 3" },
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
          .h2 {
            font-size: 2rem;
            position: absolute;
          
          }
          .underline-custom::after {
          content: "";
            display: block;
            width: 75%;
            height: 5px;
            background-color: #1e1b4b
;
            margin: 0 0 0 auto;
          }
        `}
      </style>
      <div className="relative">
        {banners.map((banner) => (
          <div key={banner.id} className="relative h-100 md:h-96">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-50 flex items-center justify-left bg-gradient-to-t from-black/75 via-black/0">
          <div className="text-center justify-items-start">
            <h1
              className={`px-3 sm:text-2xl md:text-4xl lg:text-4xl text-white font-bold font-raleway text-gray fade-in ${
                isVisible ? 'visible' : ''
              }`}
            >
              Welcome to Our About Page
            </h1>
          </div>
        </div>
      </div>
      <div className="text-left font-serif px-5 mt-10 underline-custom">
        <h2 className="text-4xl font-bold text-pretty antialiased accent-slate-200 text-indigo-900 px-32">About Us</h2>
      </div>
      <div className="flex flex-row mt-10 px-20 h-full mb-10">
        <div className="basis-1/3 px-10">
          <img src="2024-04-07_17-58-36_UTC_7.jpg" alt="Our mission" className="w-full h-48 object-cover mb-4 rounded" />
        </div>
        <div className="basis-2/3 py flex-wrap text-wrap font-raleway" >
          <p>
        <strong>SWAT</strong> is dedicated to work for humanity; we work for the common good and general welfare of the people. 
          </p>
          <br/>

         <p>Over a period of time, we will initiate programs in health, counseling, education, relief, rehabilitation, natural disasters and income oriented vocational training. 
        </p>
        <br/>
        <p>
         SWAT is committed to raising funds and awareness to improve the living conditions of those members of the community who are less privileged and deserve more. We hope that our future projects and endeavors will enable us to improve the living standards of the underprivileged and help them to eventually sustain on their own and hence build a better society and future for all of us.
         </p>
        </div>
      </div>
    </>
  );
};

export default About;
