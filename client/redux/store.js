import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [ thunk ];

// Reducers
import {
  getTrailsReducer,
  getTrailDetailsReducer,
  createTrailReducer,
  deleteTrailReducer
} from './reducers/trailReducers';

// Initial state
// const INITIAL_STATE = {
//   trails: []
// };

const reducer = combineReducers({
  getTrails: getTrailsReducer,
  getTrailDetails: getTrailDetailsReducer,
  createTrailReducer: createTrailReducer,
  deleteTrailReducer: deleteTrailReducer
});


const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;