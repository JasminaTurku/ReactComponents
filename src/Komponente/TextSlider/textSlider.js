import React, { useState } from "react";
import "./textSlider.css";

function TextSlider() {
  const words = [
    { id: 0, value: "Apple" },
    { id: 1, value: "Mango" },
    { id: 2, value: "Banana" },
    { id: 2, value: "Banana1" },
    { id: 2, value: "Banana2" },
  ];
  const [wordData, setWordData] = useState(words[0].value);
  const hendleClick = (index) => {
    console.log(index);
    const wordSlider = words[index].value;
    setWordData(wordSlider);
  };
  return (
    <div className="textSlider">
      <div>"{wordData}"</div>
      <div className="flex_row">
        {words.map((data, i) => (
          <h1 key={i} onClick={() => hendleClick(i)}>
            .
          </h1>
        ))}
      </div>
    </div>
  );
}
export default TextSlider;
