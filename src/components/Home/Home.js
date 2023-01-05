import { fetchExpenseAmount } from "../../store/actions/expensesActions";
import Diagramm from "../MainDiagramm/Diagramm";
import Preloader from "../preLoader/Preloader";
import './home.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



const Home = (props) => {
   const { error, isFetching, userTotalMoney, navigate } = props;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchExpenseAmount());
   }, [dispatch]);

   return (
      <div className="home-wrapper">
         <div className="home-header">
            <h1 className="home-title">HOME PAGE</h1>
         </div>
         <div className="home-wrapper__main">
            {error
               ? `Произошла ошибка: ${error}`
               : isFetching.FETCH_EXPENSE_AMOUNT
                  ? <Preloader />
                  : <>
                     <div className="home-amount">AMOUNT: {userTotalMoney + ' BYN'}</div>
                     <div className="home-flex">
                     </div>
                     <button className="home-btn" onClick={() => navigate('/addExpense')}>Add expense</button>
                     <div className="home-diagramm">
                        <Diagramm />
                     </div>
                  </>
            }
         </div>
      </div>
   );
}
export default Home;