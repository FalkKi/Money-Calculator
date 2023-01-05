import './categories.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Incomes = () => {
   const navigate = useNavigate();
   const categoriesList = useSelector(state => state.categories.incomeCategories)
   return (
      <div>
         <div>Incomes</div>
         <div onClick={() => { navigate('/categories') }}>Expenses</div>

         <ul className='category-list'>
               {categoriesList.map(el => <li key={el.id}>
                  <img className='category-img' alt='categImg' src={el.img} />
                  <p>{el.name}</p>
               </li>)}
            </ul>
      </div>
   )
}
export default Incomes;