import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import './mainDiagramm.scss';

const PieChartExpenses = ({ chartData }) => {
   
   return (
      <div className="chart-container">
         <Doughnut
            data={chartData}
            options={{
               responsive: true,
               plugins: {
                  title: {
                     display: true,
                     text: "USER EXPENSES",
                     align: "center",
                     color: 'white',
                     font: { weight: 'bold', size: 24 }
                  },
                  legend: {
                     labels: {
                        color: 'white',
                        font: { weight: 'bold', size: 14 }
                     }
                  }
               }
            }}
         />
      </div>
   );
}
export default PieChartExpenses;