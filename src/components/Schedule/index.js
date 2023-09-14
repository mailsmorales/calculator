import React, { useEffect, useState } from "react";
import moment from "moment";
import Input from "../../ui/Input";
import Dropdown from "../../ui/Dropdown";
import NumericInput from "../../ui/NumericInput";
import DateRangePicker from "../../ui/DatePicker";
import DayOfWeekPicker from "../../ui/DayOfWeekPicker";
import ColorPicker from "../../ui/ColorPicker";
import {
  breakData,
  timerTypeData,
  lectureHallData,
  teacherData,
  daysOfWeekData,
  colorsData,
} from "../../config";
import "./style.scss";

const Schedule = ({ setData }) => {
  const [breakTime, setBreakTime] = useState(null);
  const [teacher, setTeacher] = useState("");
  const [lectureHall, setLectureHall] = useState("");
  const [timerType, settimerType] = useState(null);
  const [schoolName, setSchoolName] = useState("");
  const [totalTime, setTotalTime] = useState(0);
  const [hoursPerDay, setHoursPerDay] = useState(1);
  const [groupColor, setGroupColor] = useState(colorsData[0]);
  const [date, setDate] = useState({ from: "", to: "" });
  const [partTime, setPartTime] = useState({ from: "", to: "" });

  const [days, setDays] = useState(daysOfWeekData);
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(
    moment().set({ hour: 7, minute: 0 })
  );
  const [endTime, setEndTime] = useState(null);

  const reorderDaysOfWeek = (startDayIndex, daysOfWeek) => {
    if (startDayIndex < 1 || startDayIndex > 7) {
      throw new Error("Недопустимый индекс начального дня недели.");
    }

    const startIndex = daysOfWeek.findIndex(
      (day) => day.index === startDayIndex
    );

    const orderedDaysOfWeek = [];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const index = (startIndex + i) % daysOfWeek.length;
      orderedDaysOfWeek.push(daysOfWeek[index]);
    }

    return orderedDaysOfWeek;
  };

  const calculateDays = (reorderedDaysOfWeek) => {
    const lastActiveDay =
      reorderedDaysOfWeek.length -
      1 -
      reorderedDaysOfWeek
        .slice()
        .reverse()
        .findIndex((item) => item.selected);

    if (lastActiveDay !== 7) {
      return reorderedDaysOfWeek.slice(0, lastActiveDay).length;
    } else {
      return 0;
    }
  };

  const repeatArrayElements = (count, inputArray) => {
    const repeatedArray = [];
    for (let i = 0; i < count; i++) {
      repeatedArray.push(...inputArray);
    }
    return repeatedArray;
  };

  useEffect(() => {
    const selectedDays = days.filter((item) => item?.selected);
    const repetitions =
      selectedDays.length > 0 ? Math.ceil(totalTime / selectedDays.length) : 1;
    setEndDate(
      moment(startDate).add(
        calculateDays(
          reorderDaysOfWeek(
            moment(startDate).day(),
            repeatArrayElements(Math.ceil(repetitions / hoursPerDay), days)
          )
        ),
        "days"
      )
    );
  }, [startDate, days, totalTime, hoursPerDay]);

  useEffect(() => {
    setEndTime(
      moment(startTime).add(
        hoursPerDay === 1
          ? timerType?.duration * hoursPerDay
          : (timerType?.duration + (breakTime?.duration ?? 0)) * hoursPerDay -
              (breakTime?.duration ?? 0),
        "minute"
      )
    );
  }, [startTime, timerType, hoursPerDay, breakTime]);

  useEffect(() => {
    setDate({ from: startDate, to: endDate });
    setPartTime({ from: startTime, to: endTime });
  }, [endTime, endDate, startTime, startDate]);

  const handleAddSchedule = () => {
    setData({
      schoolName,
      groupColor,
      timerType: timerType?.duration,
      totalTime,
      date,
      selectedDays: days
        .map((item) => (item.selected ? item.value : null))
        .filter((item) => item !== null),
      breakTime: breakTime?.duration,
      partTime,
      teacher,
      lectureHall,
    });
  };

  return (
    <>
      <div className="schedule">
        <div className="schedule-row">
          <Input
            value={schoolName}
            onValueChange={setSchoolName}
            placeholer="Введите название учреждения"
          />
          <div className="schedule-color-select">
            <p>Цвет группы:</p>
            <ColorPicker setGroupColor={setGroupColor} colors={colorsData} />
          </div>
        </div>
        <div className="schedule-row">
          <Dropdown
            setItem={settimerType}
            data={timerTypeData}
            placeholder="Выберите тип часов"
          />
          <NumericInput
            onValueChange={setTotalTime}
            title="Всего часов"
            // initialValue={
            //   hoursPerDay *
            //     days.filter((item) => item.selected).length *
            //     days.filter((item) => item.selected).length >
            //   0
            //     ? Math.ceil(totalTime / days.filter((item) => item.selected).length)
            //     : 1
            // }
            initialValue={totalTime}
            showMaxValue
          />
          <DateRangePicker
            setStartDate={setStartDate}
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setDate={setDate}
          />
        </div>
        <div className="schedule-row">
          <DayOfWeekPicker setDays={setDays} days={days} />
        </div>
        <div className="schedule-row">
          <Dropdown
            setItem={setBreakTime}
            data={breakData}
            placeholder="Выберите перерыв"
          />
          <NumericInput
            onValueChange={setHoursPerDay}
            title="Часов в день"
            initialValue={hoursPerDay}
            maxValue={24}
            minValue={1}
          />
          <DateRangePicker
            setStartTime={setStartTime}
            startTime={startTime}
            endTime={endTime}
            setEndTime={setEndTime}
            isTimePicker
            setTime={setPartTime}
          />
        </div>
        <div className="schedule-row">
          <Dropdown
            setItem={setTeacher}
            data={teacherData}
            placeholder="Выберите преподователя"
          />
          <Dropdown
            setItem={setLectureHall}
            data={lectureHallData}
            placeholder="Аудитория"
          />
        </div>
      </div>
      <div className="footer hui">
        <div>
          <button className="btn">Отмена</button>
          <button className="btn outline" onClick={handleAddSchedule}>
            Добавить расписание
          </button>
        </div>
      </div>
    </>
  );
};

export default Schedule;
