import AddExpense from './AddExpense';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExpenseAmount, postExpenseAmountAC } from '../../store/actions/expensesActions';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AddExpenseContainer = () => {
   const expenseCategories = useSelector(state => state.categories.expensesCategories);
   const [amount, setAmount] = useState({});
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const isFetching = useSelector(state => state.api.fetching || {});
   const error = useSelector(state => state.api.error);

   useEffect(() => {
      dispatch(fetchExpenseAmount());
   }, [dispatch]);



   const pushAddButton = () => {
      dispatch(postExpenseAmountAC(amount));
      setTimeout(navigate('/Home'), 2000);
   };
   return <AddExpense
      error={error}
      isFetching={isFetching}
      expenseCategories={expenseCategories}
      amount={amount}
      pushAddButton={pushAddButton}
      setAmount={setAmount}
   />
};

export default AddExpenseContainer;