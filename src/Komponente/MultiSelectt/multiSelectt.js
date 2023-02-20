import MultiSelect from "react-multiple-select-dropdown-lite";
import "./multiSelect.css";
import "react-multiple-select-dropdown-lite/dist/index.css";
import React, { useState } from "react";

function MultiSelectt() {
  const [value, setValue] = useState();
  const hendleOnchange = (val) => {
    setValue(val.target.value);
  };

  const options = [
    { label: "Apple", value: "apple" },
    { label: "Mango", value: "mango" },
    { label: "Orange", value: "orange" },
    { label: "Ananas", value: "ananas" },
  ];

  return (
    <div className="app">
      <div className="preview-values">
        <h4>Items</h4>
        {value}
      </div>
      <div className="app-select">
        <MultiSelect onCange={hendleOnchange} options={options} />
      </div>
    </div>
  );
}
export default MultiSelectt;
