import { format, isToday } from "date-fns";
import { Event } from "../../../../../services/eventService";
import { useEffect, useState } from "react";

import WeekEventButton from "./WeekEventButton";
import EventWindow from "../EventWindow";

interface Props {
  week: Date[];
  events?: Event[];
}

const WeekCalendar = ({ week, events = [] }: Props) => {
  // Update current time every minute
  const [currentTime, setCurrentTime] = useState(
    new Date().getHours() + new Date().getMinutes() / 60
  );
  // useEffect(() => {
  //   const timer = new Date();
  //   const intervalId = setInterval(
  //     () => setCurrentTime(timer.getHours() + timer.getMinutes() / 60),
  //     60000
  //   ); // Update every minute
  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [currentTime]); // Run once when component mounts

  const filtered = events.filter((event) => {
    const start = new Date(event.start.dateTime);
    return start >= week[0] && start <= week[week.length - 1];
  });

  const calculateEventDayPosition = (event: Event) => {
    let index = new Date(event.start.dateTime).getDay();
    if (index === 0) return 6 * 13.5;
    return (index - 1) * 13.5;
  };

  // 0, 13.5 27 40.5 54 67.5 81

  const calculateTopPosition = (hours: number, mins: number) =>
    ((hours + mins / 60) / 24) * 226.5;

  const calculateEventHeight = (event: Event) => {
    const start = new Date(event.start.dateTime);
    const end = new Date(event.end.dateTime);
    return (
      ((end.getHours() - start.getHours() + end.getMinutes() / 60) / 24) * 226.5
    );
  };

  const getEventTopPosition = (event: Event) => {
    const eventDate = new Date(event.start.dateTime);
    return calculateTopPosition(eventDate.getHours(), eventDate.getMinutes());
  };

  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState(null);

  const openEvent = (e: React.MouseEvent, ev: Event) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    setEvent(ev);
    console.log(isOpen);
  };

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
        <EventWindow isOpen={isOpen} event={event} />
        <div className="relative flex max-h-[26.5rem] overflow-y-scroll">
          {filtered.map((ev, idx) => (
            // <WeekEventButton key={idx} event={event} />
            <button
              onClick={(e) => openEvent(e, ev)}
              className="ml-[2.4rem] w-[13%] absolute h-px rounded-md flex justify-start items-center px-2 bg-accent/[.2] border-l-[3px] text-accent border-accent hover:text-accent-focus hover:bg-accent/[.3]"
              style={{
                top: `calc(${getEventTopPosition(event)}% - 1px)`,
                left: `calc(${calculateEventDayPosition(event)}% - 1px)`,
                height: `calc(${calculateEventHeight(event)}% - 2px)`,
              }}
            >
              <span className="text-sm font-medium truncate">
                {event.summary}
              </span>
            </button>
          ))}
          <div
            className="absolute left-0 right-0 h-0.5 bg-accent"
            style={{
              top: `calc(${calculateTopPosition(
                new Date().getHours(),
                new Date().getMinutes()
              )}% - 1px)`,
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
            <div className="pl-2 grid grid-cols-7 gap-0 place-items-center text-lg">
              {Array.from({ length: 24 }).map((_, hourIdx) =>
                Array.from({ length: 7 }).map((_, dayIdx) => (
                  <div
                    key={`${hourIdx}${dayIdx}`}
                    className={`h-10 flex w-full border-[0.5px] border-r border-l-0 ${
                      dayIdx === 5 || dayIdx === 6 ? "bg-primary-003" : ""
                    }`}
                  >
                    <button
                      onClick={() => "void"}
                      className="h-full w-full flex flex-col hover:bg-primary-005"
                    />
                  </div>
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
