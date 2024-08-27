import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router'
import DonationInfoPage from '../pages/Donate'


const Work = ({ projects, drives }) => {

  const navigate = useNavigate()
  const filteredProjects = projects.filter((project) => project.to != null || project.to != undefined)
  const filteredDrives = drives.filter((drive) => drive.to != null || drive.to != undefined)


  projects = filteredProjects
  drives = filteredDrives

  return (
    <section className="sm:py-8 py-4 px-4 sm:px-6 lg:px-8 font-raleway">
      <div className="container mx-auto" data-aos="fade-up">
          <h2 className=" custom-underline font-semibold text-indigo-950 mb-10 text-center font-raleway sm:text-5xl text-3xl">Our Work</h2>
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-8 sm:px-2 px-4 sm:py-0 py-2">

          {projects.map((project) => (
            <Card key={project._id}
              title={project.title}
              image={project.images[0]} // This is correct as is
              navigateTo={() => navigate(`/projects/${project._id}`)}
            />
          ))}   
          {drives.map((drive) => (
            <Card key={drive._id}
              title={drive.title}
              image={drive.images[0]}
              navigateTo={() => navigate(`/drives/${drive._id}`)}
            />
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default Work