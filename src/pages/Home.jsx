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
    cssEase: "linear",
  };

  const banners = [
    { id: 1, src: "public/BloodDonation_23/2023-11-16_16-05-09_UTC_1.jpg", alt: "Banner 1" },
    { id: 2, src: "public/RationDrive_24/2024-04-07_17-58-36_UTC_1.jpg", alt: "Banner 2" },
    { id: 3, src: "2024-04-14_16-53-03_UTC_2.jpg", alt: "Banner 3" },
  ];

  return (
    <div className="flex-col">
      <div className="relative h-screen">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative h-screen ">
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-60 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/30">
          <div className="text-center">
            <h1
              className={`px-3 sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold font-raleway transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Welcome to our SWAT home page
            </h1>
            <p
              className={`sm:text-2xl md:text-2xl lg:text-2xl text-white font-poppins transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
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
