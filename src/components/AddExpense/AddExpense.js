import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExpenseAmount, postExpenseAmountAC } from '../../store/actions/expensesActions';
import Diagramm from './../MainDiagramm/Diagramm';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Preloader from './../preLoader/Preloader';
import './addexpense.scss';
import AmountInput from './ExpenseInput';



const AddExpense = (props) => {
   const { error, isFetching, expenseCategories, amount, pushAddButton, setAmount } = props;

   const handleInputChange = (e) => setAmount({
      value: Number(e.target?.value),
      category: null,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
   } || '');

   const handleCategoryChange = (id) => (e) => setAmount(
      { ...amount, category: id }
   );
   return (
      <div className='exp-container'>
         {error ? `Произошла ошибка ${error}` :
            isFetching.FETCH_EXPENSE_AMOUNT
               ? <Preloader /> :
               <div className='exp-container'>
                  <AmountInput
                     amount={amount}
                     handleInputChange={handleInputChange}
                  />
                  <div className='exp-diagramm'>
                     <Diagramm />
                  </div>
                  <ul className='expense-list'>
                     {expenseCategories.map(el =>
                        <li
                           onClick={handleCategoryChange(el.id)}
                           key={el.id}
                           className={amount.category === el.id ? 'expense-list_active' : ''}
                        >
                           <img data-category={el.name} alt='categImg' className='category-img' src={el.img} />
                           <p>{el.name}</p>
                        </li>
                     )}
                  </ul>
                  <button className='exp-btn' disabled={!(amount.value && amount.category)}
                     onClick={pushAddButton}>ADD EXPENSE</button>
                  <div />
               </div>
         }
      </div>
   );
};
export default AddExpense;
