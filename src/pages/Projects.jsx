import React from 'react';

const Project = ({ title, description, image }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="text-xl font-bold text-orange-500 mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
      Donate Now
    </button>
  </div>
);

const ProjectSlider = () => {
  const projects = [
    {
      title: "CLEAN DRINKING WATER PROJECT",
      description: "IFTA Welfare Trust proposed to install a RO Plant in Orangi to supply clean, filtered, drinkable, & bottled water to already 909 needy families free of cost, 5049 beneficiaries.",
      image: "path_to_water_image.jpg"
    },
    {
      title: "HIGHER EDUCATION SUPPORT PROGRAM",
      description: "IFTA Welfare Trust is also providing financial aid in the Higher Education Sector for deserving students /candidates with funds & scholarships opportunities for fulfillment of their academic needs.",
      image: "path_to_education_image.jpg"
    },
    {
      title: "EARTHQUAKE RELIEF EFFORT – GILGIT BALTISTAN",
      description: "IFTA Welfare Trust was first to reach Earthquake Affected areas. The first shipment is consisted of Cooked Food, Tents, Blankets & daily used items.",
      image: "path_to_relief_image.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 p-8">
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