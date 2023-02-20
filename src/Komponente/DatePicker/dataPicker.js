import React, { useState } from "react";
import "./dataPicker.css";
function DatePicker() {
  const [date, setDate] = useState();
  return (
    <div className="DatePicker">
      <h1>Selected Date: {date}</h1>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  );
}
export default DatePicker;
