import React, { useState } from "react";
import "./style.scss";

function DayOfWeekPicker({ setDays, days }) {
  const [selectedSet, setSelectedSet] = useState(false);

  const handleDayToggle = (dayValue) => {
    setDays((prevState) => {
      return prevState.map((item) => {
        const newItem = { ...item };
        if (newItem.value === dayValue) {
          newItem.selected = !newItem.selected;
        }
        return newItem;
      });
    });
    setSelectedSet(false);
  };

  const handleSelectSpecificDays = (dayValues, btnIndex) => {
    setDays((prevState) => {
      return prevState.map((item) => {
        const newItem = { ...item };
        if (dayValues.includes(item.value)) {
          if (!selectedSet) {
            newItem.selected = true;
            setSelectedSet(true);
          } else {
            newItem.selected = false;
            setSelectedSet(false);
          }
        } else {
          newItem.selected = false;
        }
        return newItem;
      });
    });
  };

  return (
    <div className='daypicker'>
      <button
        type='button'
        onClick={() => handleSelectSpecificDays(["monday", "wednesday", "friday"], 1)}
        className={"daypicker-item"}
      >
        ПН/СР/ПТ
      </button>
      <button
        type='button'
        onClick={() => handleSelectSpecificDays(["tuesday", "thursday"], 2)}
        className={"daypicker-item"}
      >
        ВТ/ЧТ
      </button>
      {days.map((day) => (
        <label className='daypicker-item' key={day.value}>
          <input
            type='checkbox'
            value={day.value}
            checked={day.selected}
            onChange={() => handleDayToggle(day.value)}
          />
          <p>{day.label}</p>
        </label>
      ))}
    </div>
  );
}

export default DayOfWeekPicker;