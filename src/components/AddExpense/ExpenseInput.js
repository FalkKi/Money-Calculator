
const AmountInput = (props) => {
   const { amount, handleInputChange } = props;
   
   const exceptSymbols = ['e', 'E', '-', '+'];
   const maxLengthCheck = (e) => {
      if (e.target.value.length > e.target.maxLength) {
         e.target.value = e.target.value.slice(0, e.target.maxLength)
      };
   };

   return (
      <>
         <input
            onKeyDown={(e) => exceptSymbols.includes(e.key) && e.preventDefault()}
            maxLength="6"
            onInput={maxLengthCheck}
            className='expense-inp'
            type='number'
            placeholder="enter some value"
            onChange={handleInputChange}
            value={amount.value || ''}
         />
      </>
   )
}

export default AmountInput;