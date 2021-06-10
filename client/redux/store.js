import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [ thunk ];

// Reducers
import {
  getTrailsReducer,
  getTrailDetailsReducer,
  addTrailReducer,
  deleteTrailReducer
} from './reducers/trailReducers';

// Initial state
// const INITIAL_STATE = {
//   trails: []
// };

const reducer = combineReducers({
  getTrails: getTrailsReducer,
  getTrailDetails: getTrailDetailsReducer,
  addTrail: addTrailReducer,
  deleteTrail: deleteTrailReducer
});


const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;