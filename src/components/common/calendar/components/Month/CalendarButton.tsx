import { format } from "date-fns";

import { Event } from "../../../../../services/eventService";

import MonthEventButton from "./MonthEventButton";

interface Props {
  isToday: boolean;
  isWeekend: boolean;
  isCurrentMonth: boolean;
  isDisabled: boolean;
  day: Date;
  events: Event[];
  onClick?: (d: Date) => void;
}

const CalendarButton = ({
  isToday,
  isWeekend,
  isCurrentMonth,
  isDisabled,
  day,
  events = [],
  onClick,
}: Props) => {
  const getStyles = () => {
    if (isDisabled) return " text-primary-400 pointer-events-none";
    if (!isCurrentMonth) return " text-primary-200 pointer-events-none";
    if (isToday) return " text-accent font-medium";
    if (isWeekend) return " text-primary-700";

    return " text-primary-900 hover:text-primary";
  };

  // events ? console.log(events) : "";

  return (
    <div
      id={day.toLocaleString()}
      // onClick={() => onClick(day)}
      className={`h-[4.4rem] w-full flex flex-col cursor-pointer border-[0.5px] border-primary-200
                  ${isWeekend && "bg-primary-003"}`}
    >
      <span className={`px-1 mt-1 mr-1 flex justify-end ${getStyles()}`}>
        {format(day, "d")}
      </span>
      <div className="flex flex-col text-xs px-1 justify-between">
        {events.length < 3 ? (
          events.map((event, idx) => {
            console.log(event);
            return <MonthEventButton key={idx} text={event.summary} />;
          })
        ) : (
          <>
            <MonthEventButton text={events[0].summary} />
            <span className="pl-3.5 text-primary-500">
              {events.length - 1} more ...
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarButton;

{
  /* <div>
<button
  type="button"
  // onClick={() => onClick(day)}
  disabled={isDisabled || !isCurrentMonth}
  className={`${getStyles()} relative h-[4.4rem] w-full cursor-pointer border-[0.5px] border-primary-200
${isWeekend && "bg-primary-003"}`}
>
  <span className={`absolute right-2 top-1`}>{format(day, "d")}</span>
</button>
</div> */
}
