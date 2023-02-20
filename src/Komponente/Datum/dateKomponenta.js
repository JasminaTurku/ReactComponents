import React from "react";
import "./style.css";
import { DateRangePicker } from "rsuite";
// import "rsuite/dist/styles/rsuite-default.css"; //ne mogu uopste da skinem tu biblioteku javlja greske
function Detess() {
  return (
    <div className="dates">
      <DateRangePicker />
    </div>
  );
}

export default Detess;
