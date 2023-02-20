import React, { useState } from "react";
import "./popUp.css";

function PopUp() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <div className="Popup">
      <div className="buttonOpen">
        <button onClick={handleClickOpen}>Open popUp</button>
      </div>
      <div>
        {popup ? (
          <div className="main">
            <div className="povrsina">
              <div className="popup-header">
                <h1>popup</h1>
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div>
                <p>This Soimple popup in react js...</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default PopUp;
