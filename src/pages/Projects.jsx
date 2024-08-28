import React, { useEffect, useCallback, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import ProjectCard from "../components/ProjectsCard";
import Banner from "../components/Banner";
import axios from "axios";
import { motion } from "framer-motion";
import aos from "aos";
import { useProjects } from "../utils/useProjects";

const banner = {
  id: 1,
  image: "banner.jpg",
  alt: "Banner 1",
};

const Projects = ({ showBanner }) => {
  const { projects } = useProjects();
  const navigate = useNavigate();

  const navigateToProject = useCallback((projectId) => {
    navigate(`/projects/${projectId}`);
  }, [navigate]);

  const projectCards = useMemo(() => {
    return projects.map((project) => (
      <ProjectCard
        key={project._id}
        title={project.title}
        description={project.shortDescription}
        image={project.images[0]}
        navigateTo={() => navigateToProject(project._id)}
      />
    ));
  }, [projects, navigateToProject]);

  return (
    <div className="mt-auto">
      {showBanner && <Banner banner={banner} text="Projects" />}

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
          <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-semibold text-pretty antialiased accent-slate-200 text-indigo-950 px-16 font-raleway mb-5">
            Our Projects
          </h2>
        </div>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 p-2 px-10 min-w-40 mb-10">
        {projectCards}
      </div>
    </div>
  );
};

export default Projects;