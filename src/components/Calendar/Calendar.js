import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./picker.scss";




const Calendar = ({ date, changeDate }) => {
   return (
      <DatePicker 
         className="picker"
         selected={date}
         onChange={changeDate}
      />
   )
}

export default Calendar;