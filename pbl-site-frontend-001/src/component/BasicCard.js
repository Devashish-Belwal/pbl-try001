import React from 'react';
import '../styles/BasicCard.css';

const Card = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={name} style={{width:'10rem'}}/>
      </div>
      <div className="card-content">
        <h6>{name.split(' ')[0]}</h6>
        <h6>{name.split(' ')[1]}</h6>
      </div>
    </div>
  );
};

export default Card;