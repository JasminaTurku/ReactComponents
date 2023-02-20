import React, { useState } from "react";
import "./toggle.css";

function ToggleButton() {
  const [toggleButton, setToggleButton] = useState(false);
  const hendleClick = () => {
    setToggleButton(!toggleButton);
    console.log(toggleButton, "value");
  };
  return (
    <div className="Toggle">
      <div onClick={hendleClick} className="toggle">
        {toggleButton ? (
          <div className="toggle-left"></div>
        ) : (
          <div className="toggle-right"></div>
        )}
      </div>
    </div>
  );
}
export default ToggleButton;
