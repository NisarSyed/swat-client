import React from 'react';

const Project = ({ title, description, image }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg font-raleway">
    <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="text-xl font-bold text-indigo-500 mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <button className="bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-600">
      Donate Now
    </button>
  </div>
);

const ProjectSlider = () => {
  const projects = [
    {
      title: "CLEAN DRINKING WATER PROJECT",
      description: "SWAT iobm society is providing clean drinking water to the people of Thar, Sindh. We have installed water filtration plants in different areas of Thar to provide clean drinking water to the people of Thar.",
      image: "path_to_water_image.jpg"
    },
    {
      title: "HIGHER EDUCATION SUPPORT PROGRAM",
      description: "SWAT iobm society is providing financial support to the students who are unable to continue their higher education due to financial constraints. We are providing scholarships to the students to help them continue their higher education.",
      image: "path_to_education_image.jpg"
    },
    {
      title: "EARTHQUAKE RELIEF EFFORT – GILGIT BALTISTAN",
      description: "SWAT iobm society is providing relief to the people affected by the earthquake in Gilgit Baltistan. We are providing food, shelter, and medical assistance to the people affected by the earthquake.",
      image: "path_to_relief_image.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 p-8 font-serif text-justify">
      <h2 className="text-3xl font-bold mb-6">OUR PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-800 text-white p-2 mx-1 rounded">&lt;</button>
        <button className="bg-gray-800 text-white p-2 mx-1 rounded">&gt;</button>
      </div>
    </div>
  );
};

export default ProjectSlider;