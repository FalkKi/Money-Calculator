import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './categories.scss';
const Categories = () => {
   const navigate = useNavigate();
   const categoriesList = useSelector(state => state.categories.expensesCategories)
   const navToIncomes = () => { navigate('/incomes') }
   const navToAddingCategory = () => { navigate('/addingCategory') }
return (
   <div>
      <h1>Categories</h1>
      <div>
         <div onClick={() => navigate('/categories')}>Expenses</div>
         <div onClick={navToIncomes}>Incomes</div>

         <ul className='category-list'>
            {categoriesList.map(el => <li key={el.id}>
               <img className='category-img' alt='categImg' src={el.img} />
               <p>{el.name}</p>
            </li>)}
         </ul>
         <button onClick={navToAddingCategory} className='add-category'>Add Category</button>
      </div>
   </div>
)
}
export default Categories