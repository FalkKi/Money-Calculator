import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PieChartIncomes from './PieChartIncomes';
import './mainDiagramm.scss';
import { actualDate } from "../../store/reducers/actualDate";
import Calendar from './../Calendar/Calendar';
import { groupByCategory } from "../../utils/utils";

const IncomeDiagramm = () => {

   const [date, setDate] = useState(new Date());
   const [dateFormat, setDate2] = useState(actualDate);
   const changeDate = (newDate) => {
      setDate(newDate);
      setDate2(
         (('0' + newDate.getDate()).slice(-2) + ',' + ('0' + (newDate.getMonth() + 1)).slice(-2) + ',' + newDate.getFullYear())
      );
   };
   const incomes = useSelector(state => state.expenses[dateFormat]?.income || []);
   const categories = useSelector(state => state.mainDiagrammData.income);
   const categoriesDefault = useSelector(state => state.mainDiagrammData.initValue);

   const categoryGroup = groupByCategory(incomes, categories);
   console.log(categoryGroup)

   const chartData = {
      labels: categoryGroup.reduce((acc, { value }) => acc + value, 0) === 0
         ? categoriesDefault.map(({ name }) => name)
         : categoryGroup.map(({ name }) => name),
      datasets: [
         {
            label: 'Incomes',
            data: categoryGroup.reduce((acc, { value }) => acc + value, 0) === 0
               ? categoriesDefault.map(({ value }) => value)
               : categoryGroup.map(({ value }) => value),
            backgroundColor: categoryGroup.reduce((acc, { value }) => acc + value, 0) === 0
               ? categoriesDefault.map(({ color }) => color)
               : [
                  "#8B008B",
                  "#7FFF00",
               ],
            borderColor: "white",
            borderWidth: 1,
         },
      ],
   };

   return (
      <div>
         <PieChartIncomes
            chartData={chartData}
         />
         <ul className="categories-list_income">
            {categories.map((el, i) => {
               return <li key={i}>{el.name} : <span>{
                  categoryGroup.map(inc => inc.name === el.name ? inc.value + ' BYN' : '')
               }
               </span>
               </li>
            })}
         </ul>
         <Calendar
            date={date}
            changeDate={changeDate} />
      </div>
   )
}
export default IncomeDiagramm;