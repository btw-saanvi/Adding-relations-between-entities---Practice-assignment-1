import React from "react";

const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
    </div>
  );
};

export default DestinationCard;
