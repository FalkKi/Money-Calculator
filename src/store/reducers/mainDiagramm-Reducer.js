import * as actionTypes from '../actions/actionTypes';

export const initialGraphData = {
   expenses: [
      {
         id: 1,
         name: 'Family',
         color: '#800080',
         icon: '',
         date: '',
         value: 40,
      },
      {
         id: 2,
         name: 'Sport',
         color: '#D2B48C',
         icon: '',
         date: '',
         value: 10,
      },
      {
         id: 3,
         name: 'Medicines',
         color: '#006400',
         icon: '',
         date: '',
         value: 30,
      },
      {
         id: 4,
         name: 'Hobbies',
         color: '#2F4F4F',
         icon: '',
         date: '',
         value: 0,
      },
      {
         id: 5,
         name: 'Enterteiment',
         color: '#008080',
         icon: '',
         date: '',
         value: 0,
      },
      {
         id: 6,
         name: 'Transport',
         color: '#4B0082',
         icon: '',
         date: '',
         value: 0,
      },
      {
         id: 7,
         name: 'Buisiness',
         color: 'brown',
         icon: '',
         date: '',
         value: 0,
      },

   ],
   income:
      [
         {
            id: 1,
            name: 'Salary',
            color: '#8B008B',
            icon: '',
            date: '',
            value: 0,
         },
         {
            id: 2,
            name: 'Gift',
            color: '#7FFF00',
            icon: '',
            date: '',
            value: 0,
         },
      ],
   initValue: [
      {
         name: 'NO DATA FOR THIS DATE',
         color: 'gray',
         icon: '',
         date: '',
         value: 1,
      }
   ],
};

export default function (state = initialGraphData, action) {
   return state;
};
