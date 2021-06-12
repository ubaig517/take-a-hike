import React from 'react';
import { Link } from 'react-router-dom';
import './Trail.css';
// { productId, name, imageUrl, description, price }
const Trail = ({ imageUrl, difficulty, trailType, length, trailName, parkName, location, excerpt, trailId }) => {
  return (
    <div className="trail-card">
      <img className="trail-card__image" src={imageUrl} alt={parkName} />
      <div className="trail-card__meta">
        <p className="meta-item">{difficulty}</p>
        <p className="meta-item">{trailType.toLowerCase() === 'loop' ? <i className="fas fa-sync-alt"></i> : <i className="fas fa-route"></i> }</p>
        <p className="meta-item"><span>{length}</span>mi.</p>
      </div>
      <div className="trail-card__content">
        <div className="trail-card__header">
          <Link to={`/trail/${trailId}`} className="card__title">{trailName.substring(0, 24)}...</Link>
          <p className="card__subtitle">{parkName}</p>
          <p className="card__subtitle">{location}</p>
        </div>
        <div className="trail-card__info">
          <p className="info__description">{excerpt.substring(0, 100)}...</p>
          <Link to={`/trail/${trailId}`} className="trail-info__button">View <i className="fas fa-chevron-right"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Trail;
