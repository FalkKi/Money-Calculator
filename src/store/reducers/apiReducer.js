import * as actionTypes from '../actions/actionTypes';

export default function (state = {}, action) {
  
  switch (action.type) {
    case actionTypes.API_START:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          [action.payload]: true
        },
        error: '',
      };
    case actionTypes.API_END:
      return {
        ...state,
        fetching: {
          ...state.fetching,
          [action.payload]: false
        }
      };
    case actionTypes.API_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};