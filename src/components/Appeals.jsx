import React from "react";
import Card from "./Card";
import { useProjects } from "../utils/useProjects";
import { useDrives } from "../utils/useDrives";
import { useNavigate } from "react-router";

// projects that have to date null or undefined are displayed under the Appeal section with the donate button
const Appeals = ({drives, projects}) => {

  const appeals = [
    ...projects
      .filter((project) => project.to === null || project.to === undefined)
      .map((project) => ({ ...project, type: "project" })),
    ...drives
      .filter((drive) => drive.to === null || drive.to === undefined)
      .map((drive) => ({ ...drive, type: "drive" })),
  ];
  const navigate = useNavigate();

  const handleNavigate = (appeal) => {
    if (appeal.type === "project") {
      navigate(`/projects/${appeal._id}`);
    } else if (appeal.type === "drive") {
      navigate(`/drives/${appeal._id}`);
    }
  };

  return (
    <section className="sm:py-8 py-4 px-4 sm:px-6 lg:px-8 font-raleway">
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="font-semibold text-indigo-950 mb-10 text-center font-raleway custom-underline sm:text-5xl text-3xl">
          Our Appeals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:px-2 px-4 sm:py-0 py-2">
          {appeals.map((appeal) => (
            <Card
              key={appeal._id}
              title={appeal.title}
              image={appeal.images[0]}
              navigateTo={() => handleNavigate(appeal)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appeals;