import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const ProjectFull = ({isOpen, onClose, project}) => {

  if (!isOpen) return null;


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-4 rounded-xl shadow-lg w-11/12 md:w-1/2"
      >
        <h3 className="text-xl text-indigo-500">{project.title}</h3>
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={4000}
        >
          {project.image.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={project.title}
                className="w-full h-3/5 object-cover p-4 rounded-2xl"
              />
            </div>
          ))}
        </Slider>
        <p className="text-gray-700 p-2">{project.fullDescription}</p>
        <button className='bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-800'
        onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}


const ProjectSlider = () => {

  const [isSelect, setIsSelect] = React.useState(false);

  const projects = [
    {
      title: "Social Development Project",
      shortDescription: "Empowering individuals to carve their own paths. Meet Mustafa Rafiq, a driven entrepreneur...",
      fullDescription: "At the heart of genuine progress lies the empowerment of individuals to carve their own paths. We're thrilled to unveil our newest SD endeavor! Allow us to introduce Mustafa Rafiq, a driven entrepreneur whose tenacity and vision have brought forth his very own children's garments kiosk. These initiatives enable individuals like Mustafa to ignite their potential for earnings and embody the ethos of empowerment and community betterment. Equipping Mustafa with the essential tools and support not only transforms his life but also enriches the lives of those around him.",
      image: ["SDProject_24/2024-05-24_16-03-34_UTC_1.jpg",
      "SDProject_24/2024-05-24_16-03-34_UTC_2.jpg",
      "SDProject_24/2024-05-24_16-03-34_UTC_3.jpg"
]
    },
    {
      title: "Social Development Project",
      shortDescription: "Unveiling our latest SD project! Meet Abdul Wakil, an inspiring entrepreneur...",
      fullDescription: "We proudly unveil our latest SD project! Meet Abdul Wakil, an inspiring entrepreneur whose determination and vision have led to the establishment of his very own home-based convenience store. These projects empower individuals like Abdul to kickstart their earning potential and embody the spirit of empowerment and community upliftment. By providing Abdul Wakil with the tools and resources he needs to succeed, we're not only transforming his life but also making a positive impact on the lives of those around him.",
      image: [
        "SDProject_24/2024-05-21_16-03-40_UTC_1.jpg",
        "SDProject_24/2024-05-21_16-03-40_UTC_2.jpg",
        "SDProject_24/2024-05-21_16-03-40_UTC_3.jpg"
      ]
    },
    {
      title: "Social Development Project",
      shortDescription: "New earning opportunity for Mr. Usman Ahmed by providing Bike for Bykea services...",
      fullDescription: "Glad to share that the social development department has unlocked a new earning opportunity for Mr. Usman Ahmed by providing Bike for Bykea services. Such initiatives not only empower individuals like Usman but also foster independence within our community. We are wholeheartedly thankful for the people who helped in this good cause. We continue to acknowledge SWATs admiration and support through such means.",
      image: [
        "SDProject2_24_Bike/2024-02-20_16-06-52_UTC_1.jpg",
        "SDProject2_24_Bike/2024-02-20_16-06-52_UTC_2.jpg",
        "SDProject2_24_Bike/2024-02-20_16-06-52_UTC_3.jpg"
      ]
    }
  ];

  return (
    <div className='relative'>
    <div className="bg-gray-100 p-8 font-raleway text-justify">
      <div className="text-left font-serif px-5 mt-10 underline-custom">
        <h2 className="text-5xl font-bold text-pretty antialiased accent-slate-200 text-indigo-900 px-32 font-raleway">Our Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {projects.map((project, index) => (
          <Card 
            key={index}
            title={project.title}
            description={project.shortDescription}
            image={project.image[0]}
            onMoreDetails={() => setIsSelect(project)}
          />
        ))}
        </div>
        <div className="flex items-center justify-end mt-4">
          <button className = "bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-800">&lt;</button>
          <button className = "bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-800">&gt;</button>
        </div>
        <ProjectFull 
          isOpen={isSelect}
          onClose={() => setIsSelect(false)}
          project={isSelect}
        />
    </div>
    </div>
  )


}



export default ProjectSlider;