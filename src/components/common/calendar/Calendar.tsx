import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
  startOfYesterday,
} from "date-fns";
import { useState } from "react";

import Icon from "../Icon";
import Container from "../../../layouts/admin/Container";
import CalendarButton from "./CalendarButton";

interface Props {
  today: Date;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar = ({ today, selectedDay, setSelectedDay }: Props) => {
  // const today = startOfToday();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = (event: React.MouseEvent) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: React.MouseEvent) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <Container styles="col-span-4">
      <div className="w-full col-span-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg text-primary">
            {format(firstDayOfMonth, "MMMM yyyy")}
          </p>
          <div className="flex items-center justify-evenly">
            <button
              onClick={(e) => getPrevMonth(e)}
              className="mr-2 text-primary-800 p-1.5 rounded-full hover:bg-primary-100 hover:text-primary"
            >
              <Icon name="arrow-left" styles="size-4" />
            </button>
            <button
              onClick={getNextMonth}
              className="text-primary-800 p-1.5 rounded-full hover:bg-primary-100 hover:text-primary"
            >
              <Icon name="arrow-right" styles="size-4" />
            </button>
          </div>
        </div>
        <hr className="h-px my-6 bg-primary-200 border-0" />
        <div className="grid grid-cols-7 sm:gap-12 place-items-center">
          {days.map((day, idx) => {
            return (
              <div key={idx} className="font-semibold text-sm text-primary-800">
                {day}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-7 sm:gap-12 mt-8 place-items-center">
          {daysInMonth.map((day, idx) => {
            console.log(isEqual(day, selectedDay));
            return (
              <CalendarButton
                key={idx}
                isDisabled={isBefore(day, today) && isSameMonth(day, today)}
                isCurrentMonth={isSameMonth(day, today)}
                isToday={isToday(day)}
                isSelected={isEqual(day, selectedDay)}
                day={day}
                onClick={(d: Date) => setSelectedDay(d)}
              />
            );
          })}
        </div>
        <div className="flex justify-start pt-6">
          <button className="flex items-center mx-2 px-4 py-2 rounded-sm font-medium bg-accent text-white">
            <Icon name="plus" styles="size-5 mr-2" />
            <span>Add schedule</span>
          </button>
          <button className="flex items-center mx-2 px-4 py-2 rounded-sm font-medium bg-accent text-white">
            <Icon name="minus" styles="size-5 mr-2" />
            <span>Remove schedule</span>
          </button>
          <button className="flex items-center mx-2 px-4 py-2 rounded-sm font-medium bg-accent text-white">
            <Icon name="plus" styles="size-5 mr-2" />
            <span>Add schedule</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Calendar;
