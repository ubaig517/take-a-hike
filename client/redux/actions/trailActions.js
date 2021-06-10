import axios from 'axios';
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

// MAKING REQUEST FOR ALL TRAILS
export const getTrails = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_TRAILS_REQUEST });

      const { data } = await axios.get('/api/trails/');

      dispatch({
        type: GET_TRAILS_SUCCESS,
        payload: data
      });
    } catch(error) {
      dispatch({
        type: GET_TRAILS_FAIL,
        payload: error.reponse && error.reponse.data.message ? error.reponse.data.message : error.message
      });
    }
  };
};

// MAKING REQUEST FOR SINGLE TRAIL BY ID
export const getTrailDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_TRAIL_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/trails/${id}`);
      dispatch({
        type: GET_TRAIL_DETAILS_SUCCESS,
        payload: data
      });
    } catch(error) {
      dispatch({
        type: GET_TRAIL_DETAILS_FAIL,
        payload: error.reponse && error.reponse.data.message ? error.reponse.data.message : error.message
      });
    }
  };
};

// MAKING A POST REQUEST TO ADD NEW TRAIL
export const addTrail = (trail) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TRAIL_CREATE_REQUEST, payload: trail });
      const { data } = await axios.post('/api/trails', trail);
      
      // if (!trail._id) {
      //   const { data } = await axios.post('/api/products', trail);
      //   dispatch({ type: TRAIL_CREATE_SUCCESS, payload: data });
      // } else {
      //   const { data } = await axios.put(
      //     '/api/products/' + trail._id,
      //     product,
      //     {
      //       headers: {
      //         Authorization: 'Bearer ' + userInfo.token,
      //       },
      //     }
      //   );
      // }
      dispatch({ type: TRAIL_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: TRAIL_CREATE_FAIL,
        payload: error.reponse && error.reponse.data.message ? error.reponse.data.message : error.message
      });
    }
  };
};

// ACTION TO HANDLE DELETING OF A TRAIL
export const deleteTrail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TRAIL_DELETE_REQUEST, payload: id });

      const { data } = axios.delete(`/api/trails/${id}`);
      
      dispatch({ type: TRAIL_DELETE_SUCCESS, payload: data, success: true});
    } catch(error) {
      dispatch({
        type: TRAIL_DELETE_FAIL,
        payload: error.reponse && error.reponse.data.message ? error.reponse.data.message : error.message
      });
    }
  };
};