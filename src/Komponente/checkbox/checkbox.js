import React, { useState } from "react";
import "./checkbox.css";

function Checkbox() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);

  const hendleChange = (data) => {
    if (data === "first") {
      if (first === true) {
        console.log(data, "our value");
      }
      setFirst(!first);
    }
    if (data === "second") {
      if (second === true) {
        console.log(data, "our value");
      }
      setSecond(!second);
    }
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        value={first}
        onChange={() => hendleChange("first")}
      />
      First
      <input
        type="checkbox"
        value={second}
        onChange={() => hendleChange("second")}
      />
      Second
    </div>
  );
}
export default Checkbox;
