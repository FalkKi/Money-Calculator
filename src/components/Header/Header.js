import './header.scss';
import logoImg from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState} from 'react';
import { React } from 'react';



const Header = () => {
   const [isBurgerActive, toggleMenu] = useState(false);
   const toggleMenuMode = () => {
      toggleMenu(!isBurgerActive);
   };
   
   return (
      <header className='header'>
         <div onClick={toggleMenuMode} className='burger'>
            <span className='burger-span' />
            <span className='burger-span' />
            <span className='burger-span' />
         </div>
         <nav className={isBurgerActive ? 'menu-active' : 'menu'}>
            <ul onClick={toggleMenuMode} className='header-list'>
               <li><NavLink className="nav-link" to='/' exact="true">HOME</NavLink></li>
               <li><NavLink className="nav-link" to='/convertation'>CURRENCY</NavLink></li>
               <li><NavLink className="nav-link" to='/addincome'>INCOMES</NavLink></li>
            </ul >
            <div onClick={toggleMenuMode} className="menu__close">
               <span className="menu__close-line"></span>
               <span className="menu__close-line"></span>
            </div>
         </nav>
         <img className='logo' alt='logo' src={logoImg}></img>
      </header >
   )
}
export default Header;