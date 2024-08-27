import React from "react";
import Card from "./Card";

const EventCard = ({ title, image, description, navigateTo }) => {
  return (
    <>
      <Card
        title={title}
        image={image}
        description={description}
        navigateTo={navigateTo}
        showDonateButton={false}
      />
    </>
  );
};

export default EventCard;