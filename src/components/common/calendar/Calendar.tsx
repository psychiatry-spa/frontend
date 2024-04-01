import Icon from "../icon";

import { ReactNode, useState } from "react";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";

interface Props {
  today: Date;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar = ({ today, selectedDay, setSelectedDay }: Props) => {
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }

  let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between">
        <button>
          <Icon name="arrow-left" styles="size-4" />
        </button>
        <span className="text-lg font-semibold text-primary">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </span>
        <button>
          <Icon name="arrow-right" styles="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 mt-10 leading-6 text-left text-primary-600">
        {["S", "M", "T", "W", "T", "F", "S"].map((e: ReactNode) => (
          <span>{e}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-2">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "py-1.5"
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              className={classNames(
                isEqual(day, selectedDay) && "text-white bg-accent",
                !isEqual(day, selectedDay) && isToday(day) && "text-accent",
                !isEqual(day, selectedDay) &&
                  day >= today &&
                  "hover:bg-primary-005",
                `mx-auto flex h-8 w-8 items-center justify-center rounded-full 
                ${
                  day < today
                    ? "text-primary-500 pointer-events-none"
                    : "text-primary"
                }
                `
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>

            {/* <div className="w-1 h-1 mx-auto mt-1">
                {meetings.some((meeting) =>
                  isSameDay(parseISO(meeting.startDatetime), day)
                ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
              </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
