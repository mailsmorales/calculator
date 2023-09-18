import React, { useState } from "react";
import "./style.scss";

function DayOfWeekPicker({ setDays, days }) {
  const [selectedSet1, setSelectedSet1] = useState(false);
  const [selectedSet2, setSelectedSet2] = useState(false);

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
    setSelectedSet1(false);
    setSelectedSet2(false)
  };

  const handleSelectSpecificDays = () => {

    const specificDays = ["tuesday", "thursday"]

    setDays((prevState) => {
      return prevState.map((item) => {
        const newItem = { ...item };
        if (specificDays.includes(item.value)) {
          if (!selectedSet1) {
            newItem.selected = true
            setSelectedSet1(true)
            setSelectedSet2(false)
          } else {
            newItem.selected = false;
            setSelectedSet1(false)

          }
        } else {
          newItem.selected = false;
        }
        return newItem;
      });
    });
  };

  const handleSelectSpecificDays1 = () => {
    const specificDays = ["monday", "wednesday", "friday"]

    setDays((prevState) => {
      return prevState.map((item) => {
        const newItem = { ...item };
        if (specificDays.includes(item.value)) {
          if (!selectedSet2) {
            newItem.selected = true
            setSelectedSet2(true)
            setSelectedSet1(false)
          } else {
            newItem.selected = false;
            setSelectedSet2(false)

          }
        } else {
          newItem.selected = false;
        }
        return newItem;
      });
    });
  }

  return (
    <div className='daypicker'>
      <button
        type='button'
        onClick={() => handleSelectSpecificDays1()}
        className={"daypicker-item"}
      >
        ПН/СР/ПТ
      </button>
      <button
        type='button'
        onClick={() => handleSelectSpecificDays()}
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