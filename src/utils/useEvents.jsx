import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const getEventById = (id) => {
    const event = events.find((event) => event._id === id);
    return event;
  };

  return (
    <EventsContext.Provider value={{ events, getEventById }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  return useContext(EventsContext);
};
