import Home from './Home';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { calcMoneySumm } from '../../utils/utils';

const HomeContainer = () => {
   const userMoneyInfo = useSelector(state => state.expenses);
   const isFetching = useSelector(state => state.api.fetching || {});
   const error = useSelector(state => state.api.error);
   // const dispatch = useDispatch();
   const navigate = useNavigate();

   // useEffect(() => {
   //    dispatch(fetchExpenseAmount());
   // }, [dispatch]);
   
   return <Home
      error={error}
      isFetching={isFetching}
      userTotalMoney={calcMoneySumm(userMoneyInfo)}
      navigate = {navigate}
   />
}

export default HomeContainer;