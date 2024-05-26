import { useState } from "react";
import EventWindow from "../../EventWindow";
import { Event } from "../../../../../../services/eventService";

interface Props {
  event: Event;
  open?: boolean;
}

const MonthEventButton = ({ event, open = false }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  const openEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <EventWindow isOpen={isOpen} event={event} />
      <button
        onClick={(e) => openEvent(e)}
        className={`flex items-center my-0.5 px-1.5 ${
          isOpen && "bg-accent text-white rounded-md"
        }`}
      >
        <div
          className={`p-0.5 mr-1 rounded-full ${
            isOpen ? "bg-white" : "bg-accent"
          }`}
        />
        <span
          className={`truncate hover:font-medium ${isOpen && "font-medium"}`}
        >
          {event.summary}
        </span>
      </button>
    </>
  );
};

export default MonthEventButton;
