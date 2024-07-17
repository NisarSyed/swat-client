import React from 'react'
import Card from './Card'

const DrivesCard = ({title, description, image, onMoreDetails, navigateTo}) => {
  return (
    <>
      <Card 
        title={title} 
        description={description} 
        image={image} 
        onMoreDetails={onMoreDetails} 
        navigateTo={navigateTo} // Passing navigateTo prop to Card
      />
    </>
  )
}

export default DrivesCard