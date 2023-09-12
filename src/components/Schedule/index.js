import React from "react";
import Input from "../../ui/Input";
import "./style.scss";
import Dropdown from "../../ui/Dropdown";
import NumericInput from "../../ui/NomericInput";
import DateRangePicker from "../../ui/DatePicker";
import DayOfWeekPicker from "../../ui/DayOfWeekPicker";
import ColorPicker from "../../ui/ColorPicker";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule-row">
        <Input placeholder="Введите название учреждения" />
        <div className="schedule-color-select">
          <p>Цвет группы</p>
          <ColorPicker colors={["red", "black", "blue"]} />
        </div>
      </div>
      <div className="schedule-row">
        <Dropdown placeholder="Выберите курс" />
        <NumericInput title={"Всего часов"} initialValue={0} maxValue={100} />
        <DateRangePicker />
      </div>
      <div className="schedule-row">
        <DayOfWeekPicker />
      </div>
      <div className="schedule-row">
        <Dropdown placeholder="Выберите перерыв" />
        <NumericInput title={"Часов в день"} initialValue={0} maxValue={100} />
        <DateRangePicker />
      </div>
      <div className="schedule-row">
        <Dropdown placeholder="Выберите преподователя" />
        <Dropdown placeholder="Аудитория" />
      </div>
    </div>
  );
};

export default Schedule;
