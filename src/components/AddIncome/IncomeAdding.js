import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postIncomeAmountAC } from '../../store/actions/expensesActions';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchIncomeAmount } from './../../store/actions/expensesActions';
import './addIncome.scss';
import AmountInput from '../AddExpense/ExpenseInput';


const IncomeAdding = () => {
   const incomeCategories = useSelector(state => state.categories.incomeCategories);
   const [amount, setAmount] = useState({});
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleInputChange = (e) => setAmount(
      {
         value: Number(e.target?.value),
         category: null,
         year: new Date().getFullYear(),
         month: new Date().getMonth() + 1,
         day: new Date().getDate(),
      } || '');

   const handleCategoryClick = (id) => (e) => {
      setAmount({ ...amount, category: id });
   };

   useEffect(() => {
      dispatch(fetchIncomeAmount());
   }, [dispatch]);

   const pushAddButton = (e) => {
      dispatch(postIncomeAmountAC(amount));
      setTimeout(navigate('/addincome'), 2000);
   };

   return (
      <div className='container'>
         <AmountInput
            amount={amount}
            handleInputChange={handleInputChange}
         />
         <ul className='choose-income-category'>
            {incomeCategories.map(el =>
               <li
                  key={el.id}
                  onClick={handleCategoryClick(el.id)}
                  className={amount.category === el.id ? 'active' : ''}
               >
                  <img data-category={el.name} alt='categImg' className='category-img' src={el.img} />
                  <p>{el.name}</p>
               </li>
            )}
         </ul>
         <button className='income-btn' disabled={!(amount.value && amount.category)}
            onClick={pushAddButton}>ADD INCOME</button>
      </div>

   );
};
export default IncomeAdding;