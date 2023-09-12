import React, { useState } from 'react';
import "./style.scss"

function DayOfWeekPicker() {
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectSpecificDays1, setSelectSpecificDays1] = useState(false); // (ПН/СР/ПТ)
    const [selectSpecificDays2, setSelectSpecificDays2] = useState(false); // (ВТ/ЧТ)

    const daysOfWeek = [
        { value: 'monday', label: 'ПН' },
        { value: 'tuesday', label: 'ВТ' },
        { value: 'wednesday', label: 'СР' },
        { value: 'thursday', label: 'ЧТ' },
        { value: 'friday', label: 'ПТ' },
        { value: 'saturday', label: 'СБ' },
        { value: 'sunday', label: 'ВС' },
    ];

    const handleDayToggle = (dayValue) => {
        if (selectedDays.includes(dayValue)) {
            setSelectedDays(selectedDays.filter((day) => day !== dayValue));
        } else {
            setSelectedDays([...selectedDays, dayValue]);
        }
        setSelectSpecificDays1(false);
        setSelectSpecificDays2(false);
    };

    const handleSelectSpecificDays1 = () => {
        if (!selectSpecificDays1) {
            const specificDays1 = ['monday', 'wednesday', 'friday']; // (ПН/СР/ПТ)
            setSelectedDays(specificDays1);
            setSelectSpecificDays1(true);
            setSelectSpecificDays2(false);
        } else {
            setSelectedDays([]);
            setSelectSpecificDays1(false);
            setSelectSpecificDays2(true);
        }
    };

    const handleSelectSpecificDays2 = () => {
        if (!selectSpecificDays2) {
            const specificDays2 = ['tuesday', 'thursday']; // (ВТ/ЧТ)
            setSelectedDays(specificDays2);
            setSelectSpecificDays2(true);
            setSelectSpecificDays1(false);
        } else {
            setSelectedDays([]);
            setSelectSpecificDays2(false);
            setSelectSpecificDays1(true);
        }
        setSelectSpecificDays2(!selectSpecificDays2);
    };

    return (
        <div className='daypicker'>
            <button
                type="button"
                onClick={handleSelectSpecificDays1}
                className='daypicker-item'
            >
                ПН/СР/ПТ
            </button>
            <button
                type="button"
                onClick={handleSelectSpecificDays2}
                className='daypicker-item'
            >
                ВТ/ЧТ
            </button>
            {daysOfWeek.map((day) => (
                <label className='daypicker-item' key={day.value}>
                    <input
                        type="checkbox"
                        value={day.value}
                        checked={selectedDays.includes(day.value)}
                        onChange={() => handleDayToggle(day.value)}
                    />
                    <p>
                        {day.label}
                    </p>
                </label>
            ))}
        </div>
    );
}

export default DayOfWeekPicker;