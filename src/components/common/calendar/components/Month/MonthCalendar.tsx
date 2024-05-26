import { isBefore, isSameMonth, isToday, isEqual } from "date-fns";
import CalendarButton from "./components/CalendarButton";
import { Event } from "../../../../../services/eventService";

interface Props {
  today: Date;
  month: Date[];
  events?: Event[];
  handleWeek: (day: Date) => void;
}

const MonthCalendar = ({ today, month, events = [], handleWeek }: Props) => {
  const filterEventsByDayAndMonth = (event1: string, event2: string) => {
    const time1 = new Date(event1);
    const time2 = new Date(event2);
    return (
      time1.getDate() === time2.getDate() &&
      time1.getMonth() === time2.getMonth()
    );
  };
  return (
    <>
      <div className="grid grid-cols-7 place-items-end text-lg">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
          <div
            key={idx}
            className={`pr-1 ${
              idx > 4 ? "text-primary-700" : "text-primary-900"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-1 border-[0.5px] border-t border-primary-200">
        {month.map((day, idx) => (
          <CalendarButton
            key={idx}
            events={events.filter((event) =>
              filterEventsByDayAndMonth(event.start.dateTime, day.toISOString())
            )}
            isDisabled={isBefore(day, today) && isSameMonth(day, today)}
            isCurrentMonth={isSameMonth(day, today)}
            isToday={isToday(day)}
            // isSelected={isEqual(day, selectedDay)}
            isWeekend={day.getDay() % 6 == 0}
            day={day}
            handleClick={handleWeek}
          />
        ))}
      </div>
    </>
  );
};

export default MonthCalendar;
