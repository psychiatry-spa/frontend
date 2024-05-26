import DateTimeInput from "./DateTimeInput";
import TextInput from "./TextInput";

import { Event } from "../../../../services/eventService";

interface Props {
  isOpen: boolean;
  event: Event;
}
const EventWindow = ({ isOpen, event }: Props) => {
  return (
    <div className="w-full relative z-50">
      {isOpen && (
        <div className="absolute -bottom-10 items-start flex flex-col right-24 z-50 w-[15rem] cursor-pointer border rounded-lg p-4 px-6 border-primary-200 bg-white dark:border-dark-border dark:bg-dark-container">
          <TextInput placeholder="Event Title" isPrimary={true} styles="mb-1" />
          <TextInput placeholder="Location or Online" />
          <hr className="bg-primary w-full my-2" />
          <DateTimeInput
            dateTime={event.start.dateTime}
            labelText="start"
            defaultTime={10}
          />
          <DateTimeInput
            dateTime={event.end.dateTime}
            labelText="end"
            defaultTime={11}
          />
          <hr className="bg-primary w-full my-2" />
          <TextInput placeholder="Participants" />
          <hr className="bg-primary w-full my-2" />
          <TextInput placeholder="Add Notes" />
        </div>
      )}
    </div>
  );
};

export default EventWindow;
