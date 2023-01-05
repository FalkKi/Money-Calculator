import { combineReducers } from "redux";
import mainDiagrammReducer from "./mainDiagramm-Reducer";
import apiReducer from "./apiReducer";
import categoriesListReducer from "./categoriesListReducer";
import currencyReducer from "./currencyReducer";
import expensesReducer from "./expensesReducer";



export default combineReducers(
   {
      api: apiReducer,
      expenses: expensesReducer,
      categories: categoriesListReducer,
      mainDiagrammData: mainDiagrammReducer,
      currencyData: currencyReducer,
   }
);

