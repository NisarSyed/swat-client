import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import EventCard from "../components/EventsCard";
import Banner from "../components/Banner";
import axios from "axios";
import { motion } from "framer-motion";
import aos from "aos";
import { useEvents } from "../utils/useEvents";

const banner = {
  id: 1,
  image: "JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg",
  alt: "Banner 1",
};

const Events = ({ showBanner }) => {
  const { events } = useEvents();

  const navigate = useNavigate();

  return (
    <>
      <div className="mt-auto">
        {showBanner && <Banner banner={banner} text="Events" />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className={`font-raleway px-5 mt-10 mb-10 md:mb-10 ${
              showBanner
                ? "text-left text-indigo-900 underline-custom"
                : "text-center"
            }`}
          >
            <h2 className="text-5xl font-semibold text-pretty antialiased accent-slate-200 text-indigo-950 px-16 font-raleway mb-5">
              Our <span>Events</span>
            </h2>
          </div>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 p-2 px-20 min-w-40 mb-10">
          {events.map((event) => (
            <EventCard
              key={event._id}
              title={event.title}
              description={event.description} // Changed from description to shortDescription
              image={event.images[0]} // This is correct as is
              navigateTo={() => navigate(`/events/${event._id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
