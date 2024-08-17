import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HelpOptions from "../components/Help";
import Work from "../components/Work";
import { Calendar } from "lucide-react";
import EventsSection from "../components/Event";
import AOS from "aos";
import "aos/dist/aos.css";
import { useProjects } from "../utils/useProjects";
import { useDrives } from "../utils/useDrives";
import axios from "axios";
import Appeals from "../components/Appeals";

const Home = () => {
  const { projects } = useProjects();
  const { drives } = useDrives();

  const [banners, setBanners] = useState([]);
  const event = {
    title: "Event Title",
    date: "2024-08-15",
    time: "6:00 PM",
    location: "123 Main St, Springfield, IL",
    attendees: 150,
    description: "Join us for an evening of giving and entertainment.",
    image: "/images/event.jpg",
    highlights: [
      {
        title: "Special Guests",
        description: "Meet local celebrities and influencers.",
      },
      {
        title: "Live Music",
        description: "Enjoy performances by local artists.",
      },
      {
        title: "Silent Auction",
        description: "Bid on exclusive items and experiences.",
      },
    ],
    outcomes: [
      "Raised $10,000 for charity",
      "Increased awareness of local causes",
      "Engaged 150 volunteers",
    ],
  };

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/banners");
        setBanners(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    fetchBanners();
  }, [banners]);

  console.log("Banners in Home component", banners);

  const upcomingEvents = [
    {
      id: 1,
      date: "2024-08-15",
      title: "Annual Charity Gala",
      description: "Join us for an evening of giving and entertainment.",
    },
    {
      id: 2,
      date: "2024-08-22",
      title: "Community Clean-up Drive",
      description: "Help us make our neighborhood beautiful!",
    },
    {
      id: 3,
      date: "2024-09-01",
      title: "Back-to-School Supply Drive",
      description: "Donate school supplies for underprivileged children.",
    },
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

  console.log("Projects in Home component", projects);
  console.log("Drives in Home component", drives);

  return (
    <div className="flex flex-col">
      <div className="relative h-screen">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner._id} className="relative h-screen">
              <img src={banner.image} className="w-full h-full object-cover" />
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

      <div className="w-full" data-aos="fade-up">
        <HelpOptions />
      </div>
      <div data-aos="fade-up">
        <Work projects={projects} drives={drives} />
      </div>
      <div data-aos="fade-up">
        <Appeals />
      </div>
    </div>
  );
};

export default React.memo(Home);
