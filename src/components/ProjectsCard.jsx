import React from 'react'
import Card from './Card'

const ProjectCard = ({title, image, description, navigateTo}) => {
  return (
    <>
      <Card 
        title={title} 
        image={image} 
        description={description} 
        navigateTo={navigateTo} // Passing navigateTo prop to Card
      />
    </>
  )
}

export default ProjectCard