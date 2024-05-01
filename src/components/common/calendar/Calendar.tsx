import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfWeek,
} from "date-fns";
import { useState } from "react";

import Icon from "../Icon";
import Container from "../../../layouts/admin/Container";
import CalendarButton from "./CalendarButton";

import { IconButton } from "../buttons/IconButton";

interface Props {
  today: Date;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar = ({ today, selectedDay, setSelectedDay }: Props) => {
  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  while (daysInMonth.length < 42) {
    let tomorrow = new Date(+daysInMonth[daysInMonth.length - 1]);
    daysInMonth.push(new Date(tomorrow.setDate(tomorrow.getDate() + 1)));
  }

  const setPrevMonth = () =>
    setCurrMonth(format(add(firstDayOfMonth, { months: -1 }), "MMM-yyyy"));

  const setNextMonth = () =>
    setCurrMonth(format(add(firstDayOfMonth, { months: 1 }), "MMM-yyyy"));

  return (
    <Container styles="col-span-2">
      <div className="w-full col-span-2">
        <div className="flex items-center justify-between pb-4">
          <IconButton name="arrow-left" handleClick={setPrevMonth} size="4" />
          <p className="font-semibold text-lg text-primary">
            {format(firstDayOfMonth, "MMMM yyyy")}
          </p>
          <IconButton name="arrow-right" handleClick={setNextMonth} size="4" />
        </div>
        <hr className="mb-6 bg-primary-200" />
        <div className="grid grid-cols-7 gap-6 place-items-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
            <div key={idx} className="font-semibold text-sm text-primary-800">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-6 mt-5 place-items-center">
          {daysInMonth.map((day, idx) => (
            <CalendarButton
              key={idx}
              isDisabled={isBefore(day, today) && isSameMonth(day, today)}
              isCurrentMonth={isSameMonth(day, today)}
              isToday={isToday(day)}
              isSelected={isEqual(day, selectedDay)}
              day={day}
              onClick={(d: Date) => setSelectedDay(d)}
            />
          ))}
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
