const timerTypeData = [
  { title: "Академический", key: "1", duration: 45 },
  { title: "Астрономический", key: "2", duration: 60 },
];

const breakData = [
  { title: "Без перерыва", key: "0", duration: 0 },
  { title: "10 мин", key: "1", duration: 10 },
  { title: "20 мин", key: "2", duration: 20 },
  { title: "30 мин", key: "3", duration: 30 },
];

const teacherData = [
  { title: "Али Микхманов", key: "0" },
  { title: "Полина Суетолог", key: "1" },
  { title: "Гоша Галоша", key: "2" },
];
const lectureHallData = [
  { title: "Класс Али Микхманова", key: "0" },
  { title: "Класс Полина Суетолога", key: "1" },
  { title: "Класс Гоша Галоши", key: "2" },
];
const daysOfWeekData = [
  { value: "monday", label: "ПН", index: 1, selected: false },
  { value: "tuesday", label: "ВТ", index: 2, selected: false },
  { value: "wednesday", label: "СР", index: 3, selected: false },
  { value: "thursday", label: "ЧТ", index: 4, selected: false },
  { value: "friday", label: "ПТ", index: 5, selected: false },
  { value: "saturday", label: "СБ", index: 6, selected: false },
  { value: "sunday", label: "ВС", index: 7, selected: false },
];
const colorsData = ["red", "blue", "green", "yellow"];

export { timerTypeData, breakData, teacherData, lectureHallData, daysOfWeekData, colorsData };