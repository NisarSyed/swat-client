import React from 'react'
import Projects from '../pages/Projects'
import Drives from '../pages/Drives'
import Card from './Card'


const Work = ({ projects, drives }) => {

  return (
    <section className="py-12 font-raleway">
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-5xl font-semibold text-indigo-950 mb-10 text-center font-raleway ">Our Work</h2>
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-4">

          {projects.map((project) => (
            <Card key={project._id}
              title={project.title}
              description={project.shortDescription} // Changed from description to shortDescription
              image={project.images[0]} // This is correct as is
              navigateTo={`/projects/${project._id}`}
            />
          ))}   
          {drives.map((drive) => (
            <Card key={drive._id}
              title={drive.title}
              description={drive.description}
              image={drive.images[0]}
              navigateTo={`/drives/${drive._id}`}
            />
          ))}

        </div>
      </div>
    </section>
    
  )
}

export default Work