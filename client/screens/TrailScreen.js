import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './TrailScreen.css';

// Actions
// import { getProductDetails } from '../redux/actions/productActions';
import { getTrailDetails } from '../redux/actions/trailActions';

// { match, history }
const TrailScreen = ({ match }) => {
  const dispatch = useDispatch();

  const trailDetails = useSelector(state => state.getTrailDetails);
  const {loading, error, trail} = trailDetails;

  useEffect(() => {
    if(trail && match.params.id !== trail._id) {
      dispatch(getTrailDetails(match.params.id));
    }
  }, [dispatch, trail, match]);

  // <div className="productscreen">
  //   {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
  //     <>
  return (
    <div className="trail-screen">
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : ( 
        <>
          <h2>{trail.trailName}</h2>
          <div className="trail-screen__top">
            <img className="top-left__image" src={trail.imageUrl} alt={trail.parkName} />

            <div className="top-right__details">
              <div className="trail-details">
                <p className="details__park">{trail.parkName}</p>
                <p className="details__location">{trail.location}</p>
                <p className="details__excerpt">{trail.excerpt}</p>
              </div>

              <div className="trail-meta">
                <div className="meta__left">
                  <ul>
                    <li>Difficulty: <span>{trail.difficulty}</span></li>
                    <li>Length: <span>{trail.length}</span> mi</li>
                    <li>Trail Type: <span>{trail.trailType}</span></li>
                  </ul>
                </div>

                <div className="meta__right">
                  <ul>
                    <li>Elevation Gain: <span>{trail.elevationGain}</span> ft</li>
                    <li>Hiker Rating: <span>{trail.rating}</span> out of 5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="trail-screen__bottom">
            <p>{trail.description}</p>
            <div className="trail-screen__btn-container">
              {/* <button className="trail-update-btn">
            Update Trail
            <i className="fas fa-pen"></i>
          </button> */}
              <Link to={'/'} className="trail-back-btn">
                <i className="fas fa-chevron-left"></i>
                Return Home
              </Link>
              <button className="trail-delete-btn">
                Delete Trail
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TrailScreen;
