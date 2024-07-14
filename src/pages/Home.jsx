import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HelpOptions from "../components/Help";
import Work from "../components/Work";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };

  const banners = [
    { id: 1, src: 'banner.jpg', alt: 'Banner 1' },
    { id: 2, src: '2024-04-04_18-04-07_UTC_7.jpg', alt: 'Banner 2' },
    { id: 3, src: '2024-04-14_16-53-03_UTC_2.jpg', alt: 'Banner 3' },
  ];

  return (
    <div>
    <div className="relative">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative md:h-96">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1
            className={`px-3 sm:text-2xl md:text-4xl lg:text-4xl text-white font-bold font-raleway transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Welcome to our SWAT home page
          </h1>
          <p
            className={`sm:text-xl md:text-2xl lg:text-2xl text-white font-poppins transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            #TogetherWeCan
          </p>
        </div>
      </div>
    </div>
    <HelpOptions />
    <Work />
  </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <>
//       <div className="relative">
//         <img src="banner.jpg" alt="Banner" className="w-full h-auto" />
//         <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-40 flex items-center justify-start">
//           <div className="bg-opacity-0 p-4">
//             <h1 className="sm:text-2xl md:text-4xl lg:text-4xl text-white font-bold">
//               Welcome to our SWAT home page
//             </h1>
//             <p className="sm:text-xl md:text-2xl lg:text-2xl text-white">
//               An IOBM Society
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
