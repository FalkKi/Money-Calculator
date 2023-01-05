import React from "react";
import PieChartExpenses from "./PieChart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { actualDate } from './../../store/reducers/actualDate';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../Calendar/Calendar";
import '../AddExpense/addexpense.scss';
import './mainDiagramm.scss'
import { groupByCategory } from "../../utils/utils";

const Diagramm = () => {
   const [date, setDate] = useState(new Date());
   const [dateFormat, setDate2] = useState(actualDate);
   const changeDate = (newDate) => {
      setDate(newDate);
      setDate2(
         (('0' + newDate.getDate()).slice(-2) + ',' + ('0' + (newDate.getMonth() + 1)).slice(-2) + ',' + newDate.getFullYear())
      );
   };

   const dateExpenses = useSelector(state => state.expenses[dateFormat]?.expense || []);
   const categories = useSelector(state => state.mainDiagrammData.expenses);
   const categoriesDefault = useSelector(state => state.mainDiagrammData.initValue);

   const categoryGroup = groupByCategory(dateExpenses, categories);

   const chartData = {
      labels: categoryGroup.reduce((acc, { value }) => acc + value, 0) === 0
         ? categoriesDefault.map(({ name }) => name)
         : categoryGroup.map(({ name }) => name),
      datasets: [
         {
            label: 'EXPENSES',
            data: categoryGroup.reduce((acc, { value }) => acc + value, 0) === 0
               ? categoriesDefault.map(({ value }) => value)
               : categoryGroup.map(({ value }) => value),

            backgroundColor: categoryGroup.reduce((acc, { value }) => acc + value, 0) === 0
               ? categoriesDefault.map(({ color }) => color)
               : [
                  "#008080",
                  "brown",
                  '#2F4F4F',
                  '#4B0082',
                  '#800080',
                  '#D2B48C',
                  '#006400',
               ],
            borderColor: "white",
            borderWidth: 1,
         },
      ],
   };

   return (
      <>
         <PieChartExpenses
            chartData={chartData}
         />
         <div className="info-container">
            <ul className="categories-list">
               {categories.map((el, i) => {
                  return <li key={i}>{el.name} : <span>{
                     categoryGroup.map(ex => ex.name === el.name ? ex.value + ' BYN' : '')
                  }</span></li>
               })}
            </ul>
            <div className="calendar">
               <Calendar
                  date={date}
                  changeDate={changeDate}
               />
            </div>
         </div>
      </>
   )
}
export default Diagramm;
