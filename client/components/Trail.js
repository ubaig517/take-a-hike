import React from 'react';
import { Link } from 'react-router-dom';
import './Trail.css';
// { productId, name, imageUrl, description, price }
const Trail = () => {
  return (
  // <div className="product">
  //   <img src={imageUrl} alt={name} />
  //   <div className="product__info">
  //     <p className="info__name">{name}</p>
  //     <p className="info__description">{description.substring(0, 100)}...</p>
  //     <p className="info__price">${price}</p>
  //     <Link to={`/product/${productId}`} className="info__button">View</Link>
  //   </div>
  // </div>

    <div className="trail-card">
      <img className="trail-card__image" src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="park name" />
      <div className="trail-card__meta">
        <p className="meta-item">Hard</p>
        <p className="meta-item">Loop</p>
        <p className="meta-item"><span>5.6</span>mi</p>
      </div>
      <div className="trail-card__content">
        <div className="trail-card__header">
          <Link to={'/trail/123'} className="card__title">Cascade Mountain and Porter Mountain Loop...</Link>
          <p className="card__subtitle">High Peaks Wilderness</p>
          <p className="card__subtitle">Keen, NY</p>
        </div>
        <div className="trail-card__info">
          <p className="info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloremque!</p>
          <Link to={'/trail/123'} className="info__button">View</Link>
        </div>
      </div>
    </div>
  );
};

export default Trail;
