import { useState } from "react";
import { Event } from "../../../../../services/eventService";

import EventWindow from "../EventWindow";

interface Props {
  event: Event;
  open?: boolean;
}

const WeekEventButton = ({ event, open = false }: Props) => {
  const [isOpen, setIsOpen] = useState(open);
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

  const openEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="">
      <EventWindow isOpen={isOpen} event={event} />
      <button
        onClick={(e) => openEvent(e)}
        className="ml-[2.4rem] w-[13%] absolute h-px rounded-md flex justify-start items-center px-2 bg-accent/[.2] border-l-[3px] text-accent border-accent hover:text-accent-focus hover:bg-accent/[.3]"
        style={{
          top: `calc(${getEventTopPosition(event)}% - 1px)`,
          left: `calc(${calculateEventDayPosition(event)}% - 1px)`,
          height: `calc(${calculateEventHeight(event)}% - 2px)`,
        }}
      >
        <span className="text-sm font-medium truncate">{event.summary}</span>
      </button>
    </div>
  );
};

export default WeekEventButton;
