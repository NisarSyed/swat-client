import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router';
import ProjectCard from '../components/ProjectsCard';
import Banner from '../components/Banner';
import axios from 'axios';


const banner = {
  id: 1,
  src: 'JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg',
  alt: 'Banner 1',
};



const Projects = ({project, showBanner}) => {


  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
    .then((response) => {
      setProjects(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

//   const projects = [

// ]
    const navigate = useNavigate();

      return (
        <>
          <div className='relative mt-auto'>
            {showBanner && <Banner banner={banner} text="Projects" />}
            
            <div className={`font-raleway px-5 mt-10 mb-10 md:mb-10 ${showBanner ? 'text-left text-indigo-900 underline-custom' : 'text-center'}`}>
              <h2 className='text-5xl font-bold text-pretty antialiased accent-slate-200 text-indigo-950 px-32 font-raleway mb-5'>
                Our <span>Projects</span>
              </h2>
            </div>
            
            <div className='relative grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 p-2 px-20 min-w-40 mb-10'>
              {
                projects.map((project) => (
                  <ProjectCard key={project.id}
                    title={project.title}
                    description={project.shortDescription} // Changed from description to shortDescription
                    image={project.images[0]} // This is correct as is
                    navigateTo={() => navigate(`/projects/${project.id}`)}
                  />
                ))
              }
            </div>
          </div>
        </>
      );
    }

    export default Projects;