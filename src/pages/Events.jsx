import React, { useEffect, useState, useCallback, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import EventCard from "../components/EventsCard";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import { useEvents } from "../utils/useEvents";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const banner = {
  id: 1,
  image: "banner.jpg",
  alt: "Banner 1",
};

const Events = ({ showBanner }) => {
  const { events } = useEvents();
  const navigate = useNavigate();

  const navigateToEvent = useCallback((eventId) => {
    navigate(`/events/${eventId}`);
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const eventCards = useMemo(() => {
    return events.map((event) => (
      <EventCard
        key={event._id}
        title={event.title}
        description={event.description}
        image={event.images[0]}
        navigateTo={() => navigateToEvent(event._id)}
      />
    ));
  }, [events, navigateToEvent]);

  return (
    <div className="mt-auto">
      {showBanner && <Banner banner={banner} text="Events" />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`font-raleway px-5 mt-10 mb-10 md:mb-10 ${
            showBanner ? "text-left text-indigo-900" : "text-center"
          }`}
        >
          <h2 className={` ${!showBanner ? 'custom-underline font-semibold text-indigo-950 mb-10 text-center font-raleway sm:text-5xl text-3xl' : 'text-left text-3xl sm:text-4xl md:text-5xl font-semibold text-pretty antialiased accent-slate-200 text-indigo-950 px-16 font-raleway mb-5'}`}>
            Our Events
          </h2>
        </div>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 p-2 px-10 min-w-40 mb-10">
        {eventCards}
      </div>
    </div>
  );
};

export default React.memo(Events);