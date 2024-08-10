import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HelpOptions from "../components/Help";
import Work from "../components/Work";
import { Calendar } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const upcomingEvents = [
    { id: 1, date: "2024-08-15", title: "Annual Charity Gala", description: "Join us for an evening of giving and entertainment." },
    { id: 2, date: "2024-08-22", title: "Community Clean-up Drive", description: "Help us make our neighborhood beautiful!" },
    { id: 3, date: "2024-09-01", title: "Back-to-School Supply Drive", description: "Donate school supplies for underprivileged children." },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
    <div className="flex flex-col">
      <div className="relative h-screen">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative h-screen">
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
              className={`px-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold font-raleway transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Welcome to our SWAT home page
            </h1>
            <p
              className={`mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-white font-poppins transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              #TogetherWeCan
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <div data-aos="fade-up">
          <HelpOptions />
        </div>
        <div data-aos="fade-up">
          <Work />
        </div>
      </div>

      <div className="bg-indigo-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8 text-center font-raleway">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-red-700 text-white p-4">
                  <Calendar className="inline-block mr-2" size={24} />
                  <span className="font-semibold">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-indigo-950 font-raleway">{event.title}</h3>
                  <p className="text-gray-700 font-raleway">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
