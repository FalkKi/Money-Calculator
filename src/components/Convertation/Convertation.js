import { React } from "react";
import "./convertation.scss"
import Preloader from "../preLoader/Preloader";


const Convertation = (props) => {
   const { error,
      isFetching,
      currency,
      currencyData,
      checkCurrency,
      handleCurrencyClick,
      userTotalMoney } = props;

   return (
      <div className="currency-container">
         {error ? `Произошла ошибка: ${error}` :
            isFetching.FETCH_CURRENCY_DATA ?
               <Preloader /> :
               <>
                  <p>{currency.value ? checkCurrency() : userTotalMoney} {currency.name ? currency.name : 'BYN'}</p>
                  <ul className="currency-list">
                     {currencyData.currencyInfo.map((el, i) => <li data-action={el.ind}
                        onClick={handleCurrencyClick} key={i}>
                        {el.name}
                     </li>
                     )}
                  </ul>
               </>
         }
      </div>
   );
};
export default Convertation;