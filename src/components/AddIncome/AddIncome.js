import { useNavigate } from "react-router-dom";
import IncomeDiagramm from "../MainDiagramm/IncomeDiagramm";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomeAmount } from "../../store/actions/expensesActions";
import { useEffect } from "react";
import Preloader from './../preLoader/Preloader';
import './addIncome.scss';
import { calcMoneySumm } from '../../utils/utils';

const AddIncome = () => {
   const navigate = useNavigate();
   const isFetching = useSelector(state => state.api.fetching || {});
   const error = useSelector(state => state.api.error);
   const dispatch = useDispatch();
   const userMoneyInfo = useSelector(state => state.expenses);
   
   useEffect(() => {
      dispatch(fetchIncomeAmount());
   }, [dispatch]);
   return (
      <div className="income-container">
         {error ? `Произошла ошибка ${error}` :
            isFetching.FETCH_EXPENSE_AMOUNT
               ? <Preloader /> :
               <div>
                  <div className="home-flex">
                     <div className="home-navigator">
                        <div onClick={() => navigate('/home')}>Add Expense</div>
                     </div>
                  </div>
                  <div className="income-amount">AMOUNT: {calcMoneySumm(userMoneyInfo) + ' BYN'}</div>
                  <button className="add-income-btn" onClick={() => { navigate('/incomeadding') }}>Add Income</button>
                  <div className="income-diagramm">
                     <IncomeDiagramm />
                  </div>
               </div>
         }
      </div >
   );
};

export default AddIncome;