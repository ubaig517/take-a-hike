import {
  GET_TRAILS_REQUEST,
  GET_TRAILS_SUCCESS,
  GET_TRAILS_FAIL,
  GET_TRAIL_DETAILS_REQUEST,
  GET_TRAIL_DETAILS_SUCCESS,
  GET_TRAIL_DETAILS_FAIL,
  TRAIL_CREATE_REQUEST,
  TRAIL_CREATE_SUCCESS,
  TRAIL_CREATE_FAIL,
  TRAIL_DELETE_REQUEST,
  TRAIL_DELETE_SUCCESS,
  TRAIL_DELETE_FAIL,
  TRAIL_UPDATE_REQUEST,
  TRAIL_UPDATE_SUCCESS,
  TRAIL_UPDATE_FAIL
} from '../constants/trailConstants';

export const getTrailsReducer = (state = { trails: [] }, action) => {
  switch(action.type) {
  case GET_TRAILS_REQUEST:
    return {
      loading: true,
      trails: []
    };

  case GET_TRAILS_SUCCESS:
    return {
      loading: false,
      trails: action.payload
    };

  case GET_TRAILS_FAIL:
    return {
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
};

export const getTrailDetailsReducer = (state = { trail: {} }, action) => {
  switch(action.type) {
  case GET_TRAIL_DETAILS_REQUEST:
    return {
      loading: true
    };

  case GET_TRAIL_DETAILS_SUCCESS:
    return {
      loading: false,
      trail: action.payload
    };

  case GET_TRAIL_DETAILS_FAIL:
    return {
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
};

export const addTrailReducer = (state = { trail: {} }, action) => {
  switch(action.type) {
  case TRAIL_CREATE_REQUEST:
    return {
      loading: true
    };

  case TRAIL_CREATE_SUCCESS:
    return {
      loading: false,
      trail: action.payload,
      success: true
    };

  case TRAIL_CREATE_FAIL:
    return {
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
};

export const deleteTrailReducer = (state = { trail: {} }, action) => {
  switch(action.type) {
  case TRAIL_DELETE_REQUEST:
    return {
      loading: true
    };

  case TRAIL_DELETE_SUCCESS:
    return {
      loading: false,
      trail: action.payload,
      success: true
    };

  case TRAIL_DELETE_FAIL:
    return {
      loading: false,
      error: action.payload
    };

  default:
    return state;
  }
};

// export const trailUpdateReducer = (state = { trail: {} }, action) => {
//   switch(action.type) {
//   case TRAIL_UPDATE_REQUEST:
//     return {
//       loading: true
//     };

//   case TRAIL_UPDATE_SUCCESS:
//     return {
//       loading: false,
//       trail: action.payload,
//       success: true
//     };

//   case TRAIL_UPDATE_FAIL:
//     return {
//       loading: false,
//       error: action.payload
//     };

//   default:
//     return state;
//   }
// };

