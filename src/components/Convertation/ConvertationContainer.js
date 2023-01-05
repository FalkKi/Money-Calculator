import Convertation from './Convertation';
import { React, useEffect, useState } from "react";
import { fetchCurrencyData, fetchExpenseAmount } from "../../store/actions/expensesActions";
import { useDispatch, useSelector } from "react-redux";


const ConvertationContainer = () => {

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchExpenseAmount());
      dispatch(fetchCurrencyData());
   }, [dispatch]);

   const [currency, setCurrency] = useState({
      value: 0,
   });

   const isFetching = useSelector(state => state.api.fetching || {});
   const error = useSelector(state => state.api.error);
   const currencyData = useSelector(state => state.currencyData);
   const userMoneyInfo = useSelector(state => state.expenses);
   const userTotalMoneyArray = [];
   for (const [key, value] of Object.entries(userMoneyInfo)) {
      userTotalMoneyArray.push(value)
   };

   let userTotalMoney = userTotalMoneyArray.reduce((acc, el) => acc + el.moneyAmount, 0);

   const handleCurrencyClick = (e) => setCurrency({
      value: Number(e.target.dataset.action) || 0,
      name: e.target.textContent
   });

   const checkCurrency = () => {

      if (currency.value === 0) {
         currency.value = userTotalMoney
      };
      switch (currency.name) {
         case 'USD':
            userTotalMoney = (userTotalMoney / currency.value).toFixed(2);
            break;
         case 'EUR':
            userTotalMoney = (userTotalMoney / currency.value).toFixed(2);
            break;
         case 'RUB':
            userTotalMoney = (userTotalMoney * currency.value * 10).toFixed(2);
            break;
         case 'PLN':
            userTotalMoney = ((userTotalMoney / currency.value) * 10).toFixed(2);
            break;
         case 'GBP':
            console.log(userTotalMoney)
            userTotalMoney = (userTotalMoney / currency.value).toFixed(2);
            break;
      };
      return userTotalMoney
   };

   return <Convertation
      error={error}
      isFetching={isFetching}
      currency={currency}
      currencyData={currencyData}
      checkCurrency={checkCurrency}
      handleCurrencyClick={handleCurrencyClick}
      userTotalMoney={userTotalMoney}
   />
};
export default ConvertationContainer;