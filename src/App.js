import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import AddExpense from './components/AddExpense/AddExpense';
import Incomes from './components/Categories/Incomes';
import AddingCategory from './components/Categories/AddingCategory';
import AddIncome from './components/AddIncome/AddIncome';
import IncomeAdding from './components/AddIncome/IncomeAdding';
import Login from './components/Login/Login';
import HomeContainer from './components/Home/HomeContainer';
import ConvertationContainer from './components/Convertation/ConvertationContainer';
import AddExpenseContainer from './components/AddExpense/AddExpenseContainer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/Home" element={<HomeContainer />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/convertation" element={<ConvertationContainer />} />
        <Route path="/AddExpense" element={<AddExpenseContainer />} />
        <Route path="/Incomes" element={<Incomes />} />
        <Route path="/addIncome" element={<AddIncome />} />
        <Route path="/incomeadding" element={<IncomeAdding />} />
        <Route path="/addingCategory" element={<AddingCategory />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
