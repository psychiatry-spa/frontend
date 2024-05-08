import { format, isSameMonth, isToday } from "date-fns";

interface Props {
  days: Date[];
}

const SmallMonthCalendar = ({ days }: Props) => {
  return (
    <div>
      <span className="text-accent pl-1 text-sm">
        {format(days[15], "MMMM")}
      </span>
      <div className="mt-2 grid grid-cols-7 text-[10px] place-items-center">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
          <div key={idx} className="text-primary-600">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-2 text-[10px] font-medium gap-x-1 place-items-center">
        {days.map((day, idx) => (
          <span
            key={idx}
            className={`${
              !isSameMonth(day, days[15])
                ? "text-primary-300"
                : isToday(day)
                ? "px-1 rounded-full bg-accent text-white"
                : day.getDay() % 6 == 0
                ? "text-primary-600"
                : "text-primary-900"
            }`}
          >
            {format(day, "d")}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SmallMonthCalendar;
