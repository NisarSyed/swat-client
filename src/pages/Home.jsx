import React, { useEffect, useState, useCallback, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HelpOptions from "../components/Help";
import Work from "../components/Work";
import { Calendar } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useProjects } from "../utils/useProjects";
import { useDrives } from "../utils/useDrives";
import { useContact } from "../utils/useContacts";
import axios from "axios";
import Appeals from "../components/Appeals";
import KPISection from "../components/KPIs";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import Events from "./Events";
import Collaborators from "../components/Collaborators";
import LoadingSpinner from "../components/LoadingSpinner"; // Import the loading spinner component

const Home = () => {
  const { projects } = useProjects();
  const { drives } = useDrives();
  const { contact } = useContact();

  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const [contactData, setContactData] = useState([]);

  const fetchBanners = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/banners`
      );
      setBanners(response.data);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  useEffect(() => {
    if (contact.length > 0) {
      setIsLoading(false);
      setContactData(contact);
    }
  }, [contact]);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    setIsVisible(true);
  }, []);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "linear",
    }),
    []
  );

  if (isLoading) {
    return (
      <div className="">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col">
        <div className="relative sm:h-screen h-1/2">
          <Slider {...settings}>
            {banners.map((banner) => (
              <div key={banner._id} className="relative h-screen">
                <img
                  src={banner.image}
                  className="w-full h-full object-cover"
                  alt="Banner"
                />
              </div>
            ))}
          </Slider>
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-950 bg-opacity-60 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/30 text-center">
            <img
              src="swat.svg"
              alt="SWAT Logo"
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:hidden block"
            />
            <button
              className="absolute top-60 left-1/2 transform -translate-x-1/2 bg-red-700 text-white px-4 py-2 rounded-full font-bold sm:hidden block"
              onClick={() => navigate("/donate")}
            >
              Donate Now
            </button>
            <h1
              className={`px-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold font-raleway transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Welcome to SWAT
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

        {contactData.length > 0 && (
          <>
            <div className="w-full " data-aos="fade-up">
              <HelpOptions contact={contactData} />
            </div>
            <div data-aos="fade-up" className="p-4">
              <Work projects={projects} drives={drives} />
            </div>
            <div data-aos="fade-up" className="p-4">
              <Appeals projects={projects} drives={drives} />
            </div>
            <div data-aos="fade-up" className="p-4">
              <Events showBanner={false} />
            </div>
            <div data-aos="fade-up" className="bg-slate-100 p-4">
              <KPISection isHome={true} />
            </div>

            <div data-aos="fade-up" className="">
              <Collaborators />
            </div>

            <div
              className="text-center my-8 sm:my-16 p-4 font-raleway"
              data-aos="fade-up"
            >
              <h2 className="text-3xl sm:text-4xl sm:font-bold font-bold text-indigo-950 mb-4 sm:mb-6 px-12">
                Join Us in Making a Difference
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-700 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold flex items-center mx-auto text-base sm:text-xl font-raleway"
                onClick={() => navigate("/donate")}
              >
                Get Involved <ChevronRight className="ml-2" />
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(Home);
