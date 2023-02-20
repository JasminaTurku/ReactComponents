import React, { useState } from "react";
import "./radioButton.css";

function RadioButton() {
  const [gender, setGender] = useState();
  return (
    <div>
      <h1>{gender}</h1>
      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={(e) => setGender(e.target.value)}
      />
      Male
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={(e) => setGender(e.target.value)}
      />
      Female
    </div>
  );
}
export default RadioButton;
