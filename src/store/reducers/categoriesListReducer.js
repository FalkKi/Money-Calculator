import * as actionTypes from '../actions/actionTypes';
import sport from '../../assets/Categories/sport.svg';
import family from '../../assets/Categories/family.svg';
import medicine from '../../assets/Categories/medicine.png';
import hobby from '../../assets/Categories/hobby.svg';
import transport from '../../assets/Categories/transport.svg';
import cinema from '../../assets/Categories/cinema.svg';
import business from '../../assets/Categories/business.svg';
import salary from '../../assets/Categories/salary.svg';
import gift from '../../assets/Categories/gift.svg';


const categoriesState = {
   expensesCategories: [
      {
         id: 1,
         name: 'Family',
         img: family
      },
      {
         id: 2,
         name: 'Sport',
         img: sport
      },
      {
         id: 3,
         name: 'Medicines',
         img: medicine
      },
      {
         id: 4,
         name: 'Hobbies',
         img: hobby
      },
      {
         id: 5,
         name: 'Entertaiment',
         img: cinema
      },
      {
         id: 6,
         name: 'Transport',
         img: transport
      },
      {
         id: 7,
         name: 'Business',
         img: business
      },
   ],
   incomeCategories: [
      {
         id: 1,
         name: 'Salary',
         img: salary
      },
      {
         id: 2,
         name: 'Gifts',
         img: gift
      },
   ],
};

export default function (state = categoriesState, action) {
   switch (action.type) {
      case actionTypes.ADD_EXPENSE_CATEGORY:
         return {
            ...state,
            expensesCategories: [...state.expensesCategories, { id: action.id, name: action.name, img: action.img }]
         }
      default:
         return state;
   };
};