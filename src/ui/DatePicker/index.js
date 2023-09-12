import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./style.scss"


function DateRangePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className='datepicker'>
            <DatePicker className='datepicker-input' dateFormat="dd.MM.yyyy" selected={startDate} onChange={handleStartDateChange} />
            <div className='datepicker-attr'>
                до
            </div>
            <DatePicker className='datepicker-input' dateFormat="dd.MM.yyyy" selected={endDate} onChange={handleEndDateChange} />
        </div>
    );
}

export default DateRangePicker;