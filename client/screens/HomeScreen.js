import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomeScreen.css';


// Components
import Trail from '../components/Trail';

// Actions
// import { getProducts as listProducts } from '../redux/actions/productActions';
import { getTrails as listTrails } from '../redux/actions/trailActions';

function HomeScreen() {
  const dispatch = useDispatch();
  const getTrails = useSelector(state => state.getTrails);
  const { trails, loading, error } = getTrails;

  useEffect(() => {
    dispatch(listTrails());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Featured Trails</h2>
      <div className="homescreen__products">
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : trails.map(trail => 
          <Trail key={trail._id} 
            imageUrl={trail.imageUrl}
            difficulty={trail.difficulty}
            trailType={trail.trailType}
            length={trail.length}
            trailName={trail.trailName}
            parkName={trail.parkName}
            location={trail.location}
            excerpt={trail.excerpt}
            trailId={trail._id}
          />)}
      </div>
    </div>
  );
}

export default HomeScreen;
