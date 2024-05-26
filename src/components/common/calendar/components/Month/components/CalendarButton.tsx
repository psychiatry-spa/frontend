import { format } from "date-fns";

import { Event } from "../../../../../../services/eventService";

import MonthEventButton from "./MonthEventButton";
import MoreEventsSpan from "../../MoreEventsSpan";

import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

interface Props {
  isToday: boolean;
  isWeekend: boolean;
  isCurrentMonth: boolean;
  isDisabled: boolean;
  day: Date;
  events: Event[];
  handleClick: (d: Date) => void;
}

const CalendarButton = ({
  isToday,
  isWeekend,
  isCurrentMonth,
  isDisabled,
  day,
  events = [],
  handleClick,
}: Props) => {
  const [isNewEventOpen, setIsNewEventOpen] = useState(false);
  const getStyles = () => {
    if (isDisabled) return " text-primary-400 hover:text-primary-600";
    if (!isCurrentMonth) return " text-primary-200 hover:text-primary-400";
    if (isToday)
      return " text-accent font-medium hover:text-accent-focus hover:font-semibold";
    if (isWeekend)
      return " text-primary-700 hover:text-primary-900 hover:font-medium";

    return " text-primary-900 hover:text-primary hover:font-medium";
  };

  const addEvent = useMutation<Event, Error, Event>({
    mutationFn: (event: Event) =>
      axios
        .post<Event>("http://localhost:3000/api/admin/events", event, {
          withCredentials: true,
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => res.data),
    onSuccess: (addedEvent, newEvent) => {
      console.log(addedEvent);
      console.log(newEvent);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const createNewEvent = () => {
    addEvent.mutate({
      summary: "New event",
      start: { dateTime: "2024-04-28T21:00:00+02:00" },
      end: { dateTime: "2024-04-28T22:00:00+02:00" },
    });
  };

  return (
    <div
      onClick={() => createNewEvent()}
      id={day.toLocaleString()}
      className={`h-[4.4rem] w-full flex flex-col cursor-pointer border-[0.5px] border-primary-200
                  ${isWeekend && "bg-primary-003"}`}
    >
      <div className="flex justify-end">
        <button
          onClick={() => handleClick(day)}
          className={`px-1 mt-1 mr-1 flex justify-end ${getStyles()}`}
        >
          {format(day, "d")}
        </button>
      </div>
      <div className="flex flex-col text-xs px-1 justify-between">
        {events.length <= 2 ? (
          events.map((event, idx) => (
            <MonthEventButton key={idx} event={event} />
          ))
        ) : (
          <>
            <MonthEventButton event={events[0]} />
            <MoreEventsSpan count={events.length - 1} />
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarButton;
