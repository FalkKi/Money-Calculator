import alcohol from '../../assets/Categories/alcohol.svg';
import food from '../../assets/Categories/Food.svg';
import auto from '../../assets/Categories/auto.svg';
import './categories.scss';


const AddingCategory = () => {

   return (
      <div className='container'>
         <input type='text' placeholder="Name of category" />
         <div className="icons">
            <ul className="category-list">
               <li><img className='category-img' src={alcohol} alt="icon"></img></li>
               <li><img className='category-img' src={food} alt="icon"></img></li>
               <li><img className='category-img' src={auto} alt="icon"></img></li>
            </ul>
         </div>
         <button className='add-category'>Add Category</button>
      </div>
   );
};
export default AddingCategory;