import { format, isSameMonth, isToday } from "date-fns";

interface Props {
  days: Date[];
  handleClick: (day: Date) => void;
}

const SmallMonthCalendar = ({ days, handleClick }: Props) => {
  return (
    <div>
      <button
        onClick={() => handleClick(days[15])}
        className="text-accent font-medium pl-1 text-sm hover:text-accent-focus"
      >
        {format(days[15], "MMMM")}
      </button>
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
            className={`text-center ${
              !isSameMonth(day, days[15])
                ? "text-primary-300"
                : isToday(day)
                ? "w-3.5 rounded-full bg-accent text-white"
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
