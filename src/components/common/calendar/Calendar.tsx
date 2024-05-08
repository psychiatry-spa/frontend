import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns";
import { useState } from "react";

import MonthCalendar from "./components/Month/MonthCalendar";
import YearCalendar from "./components/YearCalendar";
import WeekCalendar from "./components/WeekCalendar";

import Container from "../../../layouts/admin/Container";
import IconButton from "../buttons/IconButton";
import MenuButton from "../buttons/MenuButton";

import { Event } from "../../../services/eventService";

interface Props {
  today: Date;
  events: Event[];
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar = ({ today, events, selectedDay, setSelectedDay }: Props) => {
  const dateFormat = "dd-MMM-yyyy";
  const [calendar, setCalendar] = useState("Month");
  const [currDate, setCurrDate] = useState(() => format(today, dateFormat));

  const getMonth = (firstDay: Date) => {
    let month = eachDayOfInterval({
      start: startOfWeek(firstDay, { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(firstDay)),
    });
    while (month.length < 42) {
      let tomorrow = new Date(+month[month.length - 1]);
      month.push(new Date(tomorrow.setDate(tomorrow.getDate() + 1)));
    }
    return month;
  };

  let firstDayOfWeek = parse(currDate, dateFormat, new Date());
  // console.log(firstDayOfWeek);

  const week = eachDayOfInterval({
    start: startOfWeek(firstDayOfWeek, { weekStartsOn: 1 }),
    end: endOfWeek(firstDayOfWeek, { weekStartsOn: 1 }),
  });

  // week.forEach((day) => console.log(day));

  let firstDayOfMonth = startOfMonth(parse(currDate, dateFormat, new Date()));

  const months: Date[][] = [];
  let firstDay = startOfYear(parse(currDate, dateFormat, new Date()));

  for (let i = 0; i < 12; i++) {
    months.push(getMonth(firstDay));
    firstDay = add(firstDay, { months: 1 });
  }
  firstDay = parse(currDate, dateFormat, new Date());

  const handleDropdown = (name: string) => setCalendar(name);

  const handleSetToday = () => {
    setCurrDate(format(today, dateFormat));
  };

  const handleSetPrevMonth = () => {
    if (calendar === "Week")
      setCurrDate(format(add(firstDayOfWeek, { weeks: -1 }), dateFormat));
    else if (calendar === "Month")
      setCurrDate(format(add(firstDayOfMonth, { months: -1 }), dateFormat));
    else if (calendar === "Year")
      setCurrDate(format(add(firstDay, { years: -1 }), dateFormat));
  };

  const handleSetNextMonth = () => {
    if (calendar === "Week")
      setCurrDate(format(add(firstDayOfWeek, { weeks: 1 }), dateFormat));
    else if (calendar === "Month")
      setCurrDate(format(add(firstDayOfMonth, { months: 1 }), dateFormat));
    else if (calendar === "Year")
      setCurrDate(format(add(firstDay, { years: 1 }), dateFormat));
  };

  return (
    <>
      <Container styles="col-span-4">
        <div className="w-full col-span-2">
          <div></div>
          <div className="flex items-center justify-between pb-4">
            <span className="font-semibold text-3xl text-primary">
              {calendar === "Year"
                ? format(firstDay, "yyyy")
                : format(firstDayOfMonth, "MMMM yyyy")}
            </span>
            <div className="flex justify-between">
              <MenuButton
                options={["Day", "Week", "Month", "Year"]}
                styles="mx-2"
                updateState={handleDropdown}
              />
              <button
                onClick={handleSetToday}
                className="mx-2 p-1 px-3 rounded-lg bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 text-primary-800 hover:text-primary dark:text-primary-200 dark:hover:text-primary-100 font-medium text-sm"
              >
                <span>Today</span>
              </button>
              <IconButton
                name="arrow-left"
                handleClick={handleSetPrevMonth}
                isBackground={true}
                styles="mx-2 mr-4"
              />
              <IconButton
                name="arrow-right"
                handleClick={handleSetNextMonth}
                isBackground={true}
              />
            </div>
          </div>
          <hr className="mb-5 bg-primary-200" />
          {calendar === "Week" && <WeekCalendar week={week} />}
          {calendar === "Month" && (
            <MonthCalendar
              today={today}
              month={getMonth(firstDayOfMonth)}
              events={events}
            />
          )}{" "}
          {calendar === "Year" && <YearCalendar months={months} />}
        </div>
      </Container>
      {/* <Container styles="col-span-4">
        <div className="w-full col-span-2">
          <div></div>
          <div className="flex items-center justify-between pb-4">
            <span className="font-semibold text-3xl text-primary">
              {calendar === "Year"
                ? format(firstDay, "yyyy")
                : format(firstDayOfMonth, "MMMM yyyy")}
            </span>
            <div className="flex justify-between">
              <MenuButton
                options={["Day", "Week", "Month", "Year"]}
                styles="mx-2"
                updateState={handleDropdown}
              />
              <button
                onClick={handleSetToday}
                className="mx-2 p-1 px-3 rounded-lg bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 text-primary-800 hover:text-primary dark:text-primary-200 dark:hover:text-primary-100 font-medium text-sm"
              >
                <span>Today</span>
              </button>
              <IconButton
                name="arrow-left"
                handleClick={handleSetPrevMonth}
                isBackground={true}
                styles="mx-2 mr-4"
              />
              <IconButton
                name="arrow-right"
                handleClick={handleSetNextMonth}
                isBackground={true}
              />
            </div>
          </div>
          <hr className="mb-5 bg-primary-200" />
          
        </div>
      </Container> */}
    </>
  );
};

export default Calendar;
