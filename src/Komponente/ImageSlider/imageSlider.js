import React, { useState } from "react";
import "./imageSlider.css";
import slika1 from "../../images/1.png";
import slika2 from "../../images/2.png";
import slika3 from "../../images/3.png";

function ImageSlider() {
  const imgs = [
    {
      id: 0,
      value: slika1,
    },
    {
      id: 1,
      value: slika2,
    },
    {
      id: 2,
      value: slika3,
    },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const hendleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  return (
    <div className="image">
      <img
        src={sliderData.value}
        height="300"
        width="500"
        display="flex"
        justify-content="center"
      />
      <div className="flex_row">
        {imgs.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={sliderData.id == i ? "clicked" : ""}
              src={data.value}
              onClick={() => hendleClick(i)}
              height="70"
              width="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ImageSlider;
