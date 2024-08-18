import React from "react";
import Card from "./Card";
import { useProjects } from "../utils/useProjects";
import { useDrives } from "../utils/useDrives";
import { useNavigate } from "react-router";

// projects that have to date null or undefined are displayed under the Appeal section with the donate button
const Appeals = () => {
  const { projects } = useProjects();
  const { drives } = useDrives();

  const navigate = useNavigate();

  // filter both drives and projects to get only the projects and drives that have to date null or undefined
  const appeals = [
    ...projects.filter(
      (project) => project.to === null || project.to === undefined
    ),
    ...drives.filter((drive) => drive.to === null || drive.to === undefined),
  ];

  return (
    <section className="py-12 font-raleway">
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-5xl font-semibold text-indigo-950 mb-10 text-center font-raleway custom-underline">
          Our Appeals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {appeals.map((appeal) => (
            <Card
              key={appeal._id}
              title={appeal.title}
              image={appeal.images[0]}
              navigateTo={() => navigate(`/projects/${appeal._id}`)}
            >
              <button className="bg-red-700 text-white px-4 py-2 rounded-md font-raleway font-semibold transition-colors duration-300 hover:bg-red-800 "
              onClick={() => navigate(`/donate`)}
              >
                Donate Now
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appeals;
