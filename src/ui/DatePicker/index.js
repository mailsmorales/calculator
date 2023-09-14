import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import "./style.scss";

function DateRangePicker(props) {
  const {
    setDate,
    isTimePicker,
    setTime,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
  } = props;

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setDate((prev) => ({ ...prev, from: date }));
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setDate((prev) => ({ ...prev, to: date }));
  };
  const handleStartTimeChange = (time) => {
    setStartTime(time);
    setTime((prev) => ({ ...prev, from: time }));
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
    setTime((prev) => ({ ...prev, to: time }));
  };

  return (
    <div className='datepicker'>
      <Datetime
        className='datepicker-input'
        timeFormat={isTimePicker ? "HH.mm" : false}
        dateFormat={!isTimePicker ? "DD.MM.YYYY" : false}
        value={isTimePicker ? startTime : startDate}
        onChange={isTimePicker ? handleStartTimeChange : handleStartDateChange}
        inputProps={{ readOnly: isTimePicker }}
      />
      <div className='datepicker-attr'>до</div>
      <Datetime
        className='datepicker-input'
        timeFormat={isTimePicker ? "HH.mm" : false}
        dateFormat={!isTimePicker ? "DD.MM.YYYY" : false}
        value={isTimePicker ? endTime : endDate}
        onChange={isTimePicker ? handleEndTimeChange : handleEndDateChange}
        inputProps={{ readOnly: isTimePicker }}
      />
    </div>
  );
}

export default DateRangePicker;