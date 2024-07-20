import React from 'react'
import Card from './Card'

const DrivesCard = ({title, image, onMoreDetails, navigateTo}) => {
  return (
    <>
      <Card 
        title={title} 
        image={image} 
        onMoreDetails={onMoreDetails} 
        navigateTo={navigateTo} // Passing navigateTo prop to Card
      />
    </>
  )
}

export default DrivesCard