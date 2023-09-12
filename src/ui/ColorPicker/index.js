import React, { useState } from "react";
import "./style.scss";

const ColorPicker = ({ colors }) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const handleChoseItem = (index) => {
    setActiveItem(index);
    setOpen(false);
  };

  return (
    <div className="colorpicker">
      <div onClick={() => setOpen(!open)} className="colorpicker-content">
        <div>
          <span
            className="colorpicker-item"
            style={{ background: colors[activeItem] }}
          ></span>
        </div>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99996 5.66614C4.91222 5.66665 4.82525 5.64983 4.74402 5.61665C4.6628 5.58348 4.58892 5.53459 4.52663 5.47281L0.526628 1.47281C0.401092 1.34727 0.330566 1.17701 0.330566 0.999473C0.330566 0.821938 0.401092 0.651675 0.526628 0.526139C0.652163 0.400603 0.822426 0.330078 0.999961 0.330078C1.1775 0.330078 1.34776 0.400603 1.47329 0.526139L4.99996 4.05947L8.52663 0.532806C8.65416 0.423588 8.81821 0.366517 8.986 0.372998C9.15378 0.379479 9.31294 0.449034 9.43167 0.567764C9.5504 0.686494 9.61995 0.845653 9.62643 1.01344C9.63292 1.18122 9.57585 1.34527 9.46663 1.47281L5.46663 5.47281C5.34245 5.59597 5.17485 5.6654 4.99996 5.66614Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={`colorpicker-content drop ${open ? "active" : ""}`}>
        {colors?.map((item, index) => (
          <span
            onClick={() => handleChoseItem(index)}
            className="colorpicker-item"
            style={{ background: item }}
            key={item}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
