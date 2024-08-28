import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import Banner from "../components/Banner";
import DrivesCard from "../components/DrivesCard";
import { useNavigate } from "react-router";
import { useDrives } from "../utils/useDrives.jsx";

const Drives = ({ showBanner }) => {
  const banner = {
    id: 1,
    image: "banner.jpg",
    alt: "Banner 1",
  };

  const { drives } = useDrives();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDrives, setFilteredDrives] = useState(drives);

  useEffect(() => {
    setFilteredDrives(drives);
  }, [drives]);

  const driveCards = useMemo(() => {
    return filteredDrives.map((drive) => (
      <motion.div
        key={drive._id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <DrivesCard
          key={drive._id}
          title={drive.title}
          description={drive.description}
          image={drive.images[0]}
          navigateTo={() => navigate(`/drives/${drive._id}`)}
        />
      </motion.div>
    ));
  }, [filteredDrives, navigate]);

  return (
    <div className="mt-auto">
      {showBanner && <Banner banner={banner} text="Drives" />}

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-pretty antialiased accent-slate-200 text-indigo-950 px-16 font-raleway mb-5">
            Our Drives
          </h2>
        </div>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 p-2 px-10 min-w-40 mb-10">
        {driveCards}
      </div>
    </div>
  );
};

export default React.memo(Drives);