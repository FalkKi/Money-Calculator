import * as actionTypes from "./actionTypes";

export const setExpenseAmount = (data) => {
   return {
      type: actionTypes.SET_EXPENSE_AMOUNT,
      data: data,
   };
};

export const fetchExpenseAmount = () => {
   return {
      type: actionTypes.FETCH_EXPENSE_AMOUNT
   };
};

export const fetchIncomeAmount = () => {
   return {
      type: actionTypes.FETCH_EXPENSE_AMOUNT
   };
};

export const postExpenseAmountAC = (expense) => {
   return {
      type: actionTypes.POST_EXPENSE_AMOUNT,
      expense: expense,
   };
};

export const postIncomeAmountAC = (income) => {
   return {
      type: actionTypes.POST_INCOME_AMOUNT,
      income,
   };
};

export const fetchCurrencyData = () => {
   return {
      type: actionTypes.FETCH_CURRENCY_DATA
   };
};
export const setCurrencyData = (currency) => {
   return {
      type: actionTypes.SET_CURRENCY_DATA,
      currency,
   };
}
