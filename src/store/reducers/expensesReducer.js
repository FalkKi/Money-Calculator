import * as actionTypes from '../actions/actionTypes';
import { actualDate } from './actualDate';

const initialState = {};

initialState[actualDate] = {
   moneyAmount: 0,
   category: '',
   year: '',
   month: '',
   day: '',
   income: [],
   expense: [],
};


export default function (state = initialState, action) {
   switch (action.type) {
      case actionTypes.SET_EXPENSE_AMOUNT:
         console.log(state)
         return {
            ...state,
            ...action.data
         };
         
      default:
         return state;
   };
   
};

