import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './AddTrailScreen.css';
const form = document.querySelector('#addTrail-form');

// Actions
import { addTrail as createTrail } from '../redux/actions/trailActions';

const AddTrailScreen = () => {
  const [trailName, setTrailName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('');
  const [parkName, setParknName] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [length, setLength] = useState(0);
  const [elevationGain, setElevationGain] = useState('');
  const [trailType, setTrailType] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');


  const dispatch = useDispatch();
  const addTrail = useSelector(state => state.addTrail);
  const { loading, success, error } = addTrail;
  loading ? console.log('Loading...') : error ? console.log(error) : console.log(success);
  // useEffect(() => {
  //   dispatch(listTrails());
  // }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createTrail({
      trailName: trailName,
      imageUrl: imageUrl,
      location: location,
      parkName: parkName,
      excerpt: excerpt,
      difficulty: difficulty,
      length: parseFloat(length),
      elevationGain: elevationGain,
      trailType: trailType,
      rating: parseFloat(rating),
      description: description
    }));

    window.location.reload();
  };


  return (
    <div className="addTrail__screen">
      <h2 className="addScreen__title">Add A Trail</h2>
      <div className="addScreen__form">
        <form id="addTrail-form" action="">
          <div className="addTrail__two-column">
            <div className="field">
              <label className="label">Trail Name</label>
              <div className="control">
                <input name="trailName" className="input" value={trailName} type="text" placeholder="Major Welch Trail" onChange={(e) => setTrailName(e.target.value)} required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Park Name</label>
              <div className="control">
                <input name="parkName" value={parkName} className="input" type="text" placeholder="Bear Mountain State Park" onChange={(e) => setParknName(e.target.value)} required/>
              </div>
            </div>
          </div>

          <div className="addTrail__two-column">
            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                <input name="location" value={location} className="input" type="text" placeholder="Bear Mountain, NY" onChange={(e) => setLocation(e.target.value)} required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Image URL</label>
              <div className="control">
                <input name="imageUrl" value={imageUrl} className="input" type="text" placeholder="https://imageurl.com" onChange={(e) => setImageUrl(e.target.value)} required/>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Brief Excerpt</label>
            <div className="control">
              <textarea name="excerpt" value={excerpt} className="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." onChange={(e) => setExcerpt(e.target.value)} required></textarea>
            </div>
          </div>
          
          <div className="addTrail__three-column">
            <div className="field">
              <label className="label">Difficulty</label>
              <div className="control">
                <input name="difficulty" value={difficulty} className="input" type="text" placeholder="Hard" onChange={(e) => setDifficulty(e.target.value)} required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Length</label>
              <div className="control">
                <input name="length" value={length} className="input" type="number" placeholder="3.5" onChange={(e) => setLength(e.target.value)} required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Rating</label>
              <div className="control">
                <input name="rating" value={rating} className="input" type="number" min="0" max="5" placeholder="4.7" onChange={(e) => setRating(e.target.value)} required/>
              </div>
            </div>
          </div>

          <div className="addTrail__two-column">
            <div className="field">
              <label className="label">Elevation Gain</label>
              <div className="control">
                <input name="elevationGain" value={elevationGain} className="input" type="text" placeholder="2,000" onChange={(e) => setElevationGain(e.target.value)} required/>
              </div>
            </div>

            <div className="field">
              <label className="label">Trail Type</label>
              <div className="control">
                <input name="trailType" value={trailType} className="input" type="text" placeholder="Loop" onChange={(e) => setTrailType(e.target.value)} required/>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Trail Description</label>
            <div className="control">
              <textarea name="description" value={description} className="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
          </div>

          <div className="control">
            <button to='/' className="add-trail-btn button is-fullwidth" onClick={submitHandler}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrailScreen;
