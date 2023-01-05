import * as actionTypes from '../actions/actionTypes';

const initialState = {
   currencyInfo: [
      {
         id: 0,
         ind: 0,
         name: '',
      },
      {
         id: 0,
         ind: 0,
         name: '',
      },
      {
         id: 0,
         ind: 0,
         name: '',
      },
      {
         id: 0,
         ind: 0,
         name: '',
      },
      {
         id: 0,
         ind: 0,
         name: '',
      },
   ]
};


export default function (state = initialState, action) {
   switch (action.type) {
      case actionTypes.SET_CURRENCY_DATA:
         
         const stateCopy = { ...state }
         action.currency.forEach(el => {
            if (el.Cur_ID === 431) {
               stateCopy.currencyInfo[0].ind = el.Cur_OfficialRate;
               stateCopy.currencyInfo[0].name = el.Cur_Abbreviation;
               stateCopy.currencyInfo[0].id = el.Cur_ID;
            };
            if (el.Cur_ID === 451) {
               stateCopy.currencyInfo[1].ind = el.Cur_OfficialRate;
               stateCopy.currencyInfo[1].name = el.Cur_Abbreviation;
               stateCopy.currencyInfo[1].id = el.Cur_ID;
            };
            if (el.Cur_ID === 456) {
               stateCopy.currencyInfo[2].ind = el.Cur_OfficialRate;
               stateCopy.currencyInfo[2].name = el.Cur_Abbreviation;
               stateCopy.currencyInfo[2].id = el.Cur_ID;
            };
            if (el.Cur_ID === 452) {
               stateCopy.currencyInfo[3].ind = el.Cur_OfficialRate;
               stateCopy.currencyInfo[3].name = el.Cur_Abbreviation;
               stateCopy.currencyInfo[3].id = el.Cur_ID;
            };
            if (el.Cur_ID === 429) {
               stateCopy.currencyInfo[4].ind = el.Cur_OfficialRate;
               stateCopy.currencyInfo[4].name = el.Cur_Abbreviation;
               stateCopy.currencyInfo[4].id = el.Cur_ID;
            };
         });
         return stateCopy;

      default:
         return state;
   };
};

