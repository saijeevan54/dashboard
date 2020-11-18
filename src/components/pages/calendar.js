/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarF() {

  const [value, onChange] = useState(new Date());
  return (
    <div className="cal">
      <h2>Calendar:</h2>
    <Calendar
      onChange={onChange}
      value={value}
    /><br/><br/>
    <div><h3>Notes:</h3>
    <hr/></div>
  </div>
  
  );
}

export default CalendarF;
