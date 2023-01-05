import * as actionTypes from "./actionTypes";

export const apiStart = label => ({
  type: actionTypes.API_START,
  payload: label
});
  
export const apiEnd = label => ({
  type: actionTypes.API_END,
  payload: label
});
  
export const apiError = (label, error) => ({
  type: actionTypes.API_ERROR,
  payload: label,
  error
});