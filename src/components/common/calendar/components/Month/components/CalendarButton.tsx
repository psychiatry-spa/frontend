import { format } from "date-fns";
import classNames from "classnames";
import { useState } from "react";

import { Event } from "../../../../../../services/eventService";

import MonthEventButton from "./MonthEventButton";
import MoreEventsSpan from "../../MoreEventsSpan";
import useAddEvent from "../../../../../../hooks/api/events/useAddEvent";

interface AddEventContext {
  previousEvents: Event[];
}

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
  // const [isNewEventOpen, setIsNewEventOpen] = useState(false);

  const variantStyles = classNames({
    "text-primary-400 hover:text-primary-600": isDisabled,
    "text-primary-200 hover:text-primary-400": !isCurrentMonth,
    "text-accent font-medium hover:text-accent-focus hover:font-semibold":
      isToday,
    "text-primary-700 hover:text-primary-900 hover:font-medium": isWeekend && isCurrentMonth,
  });

  const newEvent = {
    // id: tempId,
    summary: "New event",
    start: { dateTime: day.toISOString() },
    end: { dateTime: day.toISOString() },
  };

  const {
    data: createdEvent,
    mutate: addEvent,
    isSuccess,
    context,
  } = useAddEvent();

  const createNewEvent = () => {
    addEvent(newEvent); // Send the event without the temporary ID to the backend
    // setIsNewEventOpen(true);
  };

  return (
    <div
      onClick={() => createNewEvent()}
      id={day.toLocaleString()}
      className={`h-[4.4rem] w-full flex flex-col cursor-pointer border-[0.5px] border-primary-200 dark:border-dark-border 
                  ${isWeekend && "bg-primary-003 dark:bg-dark-bg-hover"}`}
    >
      <div className="flex justify-end">
        <button
          onClick={() => handleClick(day)}
          className={`px-1 mt-1 mr-1 flex justify-end ${
            variantStyles ||
            "text-primary-900 hover:text-primary hover:font-medium"
          }`}
        >
          {format(day, "d")}
        </button>
      </div>
      <div className="flex flex-col text-xs px-1 justify-between">
        {
          // isNewEventOpen ? (
          //   <>
          //     <MonthEventButton
          //       event={e}
          //       open={true}
          //       handleClose={() => setIsNewEventOpen(false)}
          //     />
          //     {/* {events.length > 2 ? (
          //       <MoreEventsSpan count={events?.length} />
          //     ) : (
          //       <MonthEventButton event={events[0]} />
          //     )} */}
          //   </>
          // ) :
          events.length <= 2 ? (
            events.map((event, idx) => (
              <MonthEventButton key={idx} event={event} />
            ))
          ) : (
            <>
              <MonthEventButton event={events[0]} />
              <MoreEventsSpan count={events.length - 1} />
            </>
          )
        }
      </div>
    </div>
  );
};

export default CalendarButton;
