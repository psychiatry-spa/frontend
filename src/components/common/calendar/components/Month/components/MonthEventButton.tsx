import { useState } from "react";

import EventForm from "../../EventForm";

import { Event } from "../../../../../../services/eventService";
import useModifyEvent from "../../../../../../hooks/api/events/useModifyEvent";

interface AddEventContext {
  previousEvents: Event[];
}

interface Props {
  event: Event;
  open?: boolean;
  handleClose: () => void;
}

const MonthEventButton = ({
  event,
  open = false,
  handleClose = () => {},
}: Props) => {
  const [isOpen, setIsOpen] = useState(open);
  const [formData, setFormData] = useState(event);

  const updateEvent = useModifyEvent();

  const submitEvent = (formData: Event) => {
    console.log(formData);
    updateEvent.mutate(formData);
    // handleClose();
  };

  const openEvent = (e: React.MouseEvent) => {
    // console.log(formData);
    // console.log(event);
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        onClick={(e) => openEvent(e)}
        className={`relative flex items-center my-0.5 px-1.5 ${
          isOpen && "bg-accent text-white rounded-md"
        }`}
      >
        <EventForm
          windowRef={null}
          isOpen={isOpen}
          event={event}
          formData={formData}
          setFormData={setFormData}
          handleEvent={(data: Event) => submitEvent(data)}
          handleClose={handleClose}
        />
        <div
          className={`p-0.5 mr-1 rounded-full ${
            isOpen ? "bg-white" : "bg-accent"
          }`}
        />
        <span
          className={`truncate hover:font-medium ${isOpen && "font-medium"}`}
        >
          {formData.summary}
        </span>
      </div>
    </>
  );
};

export default MonthEventButton;
