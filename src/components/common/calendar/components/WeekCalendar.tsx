import { format, isToday } from "date-fns";
import { useEffect, useState } from "react";

interface Props {
  week: Date[];
}

const WeekCalendar = ({ week }: Props) => {
  // Update current time every minute
  // const [currentTime, setCurrentTime] = useState(
  //   new Date().getHours() + new Date().getMinutes() / 60
  // );
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTime(new Date().getHours() + new Date().getMinutes() / 60);
  //   }, 60000); // Update every minute
  //   console.log(currentTime);
  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []); // Run once when component mounts

  return (
    <>
      <div className="w-full h-full">
        <div className="grid grid-cols-7 place-items-center text-lg pl-8 border-b border-primary-200">
          {week.map((day, idx) => (
            <div
              key={idx}
              className={`${
                isToday(day)
                  ? "text-accent font-medium"
                  : idx > 4
                  ? "text-primary-700"
                  : "text-primary-900"
              }`}
            >
              {format(day, "E, d")}
            </div>
          ))}
        </div>
        <div className="relative flex max-h-[26.5rem] overflow-y-scroll">
          <div
            className="absolute left-0 right-0 h-px bg-accent"
            style={{
              top: `calc(${
                ((new Date().getHours() + new Date().getMinutes() / 60) / 24) *
                226.5
              }% - 1px)`,
            }}
          />
          <div className="flex flex-col justify-between min-h-full pt-2 text-xs font-medium text-primary-300">
            {Array.from({ length: 23 }, (_, index) => (
              <span key={index} className="pt-6">
                {index < 9 ? `0${index + 1}` : index + 1}:00
              </span>
            ))}
          </div>
          <div className="w-full">
            <div className="grid grid-cols-7 gap-0 place-items-center text-lg">
              {Array.from({ length: 24 }).map((_, idx) =>
                Array.from({ length: 7 }).map((_, idx) => (
                  <button
                    className={`h-10 w-full border-[0.5px] border-r border-l-0 ${
                      idx === 5 || idx === 6 ? "bg-primary-003" : ""
                    }`}
                  ></button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekCalendar;
