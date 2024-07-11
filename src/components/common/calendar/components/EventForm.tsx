import DateTimeInput from "./DateTimeInput";
import TextInput from "./TextInput";
import IconButton from "../../buttons/IconButton";

import { Event } from "../../../../services/eventService";

interface Props {
  windowRef: React.MutableRefObject<null>;
  isOpen: boolean;
  event: Event;
}
const EventForm = ({
  windowRef,
  isOpen,
  event,
  handleEvent,
  formData,
  setFormData,
  handleClose,
}: Props) => {
  // useEffect(() => {
  //   // console.log(eventService);
  //   setFormData({
  //     summary: event.summary,
  //     start: { dateTime: event.start.dateTime },
  //     end: { dateTime: event.end.dateTime },
  //   });
  // }, [event]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (event.googleEventId) handleEvent(formData);
    handleClose();
  };

  const deleteEvent = () => {
    handleClose();
  };
  const cancel = () => {
    handleClose();
  };

  return (
    isOpen && (
      <form
        className="absolute w-52 items-start flex flex-col right-24 z-50 cursor-pointer border rounded-lg p-4 px-6 border-primary-200 bg-white dark:border-dark-border dark:bg-dark-container"
        onClick={(e) => e.preventDefault()}
      >
        <TextInput
          name="summary"
          placeholder={event.summary}
          value={event.summary}
          isPrimary={true}
          styles="mb-1"
          handleChange={(e) => handleInputChange(e)}
        />
        <TextInput
          name="location"
          value={event.location || ""}
          placeholder="Location or Online"
          handleChange={(e) => handleInputChange(e)}
        />
        <hr className="bg-primary w-full my-2" />
        <DateTimeInput
          dateTime={event.start.dateTime}
          labelText="start"
          defaultTime={10}
          handleChange={(e) => handleInputChange(e)}
        />
        <DateTimeInput
          dateTime={event.end.dateTime}
          labelText="end"
          defaultTime={11}
          handleChange={(e) => handleInputChange(e)}
        />
        <hr className="bg-primary w-full my-2" />
        <TextInput placeholder="Participants" />
        <hr className="bg-primary w-full my-2" />
        <TextInput placeholder="Add Notes" />
        <hr className="bg-primary w-full my-2" />
        <div className="mt-1 w-full flex justify-between">
          <IconButton
            name="delete"
            handleClick={deleteEvent}
            isBackground={true}
          />
          <div className="">
            <IconButton
              name="cross"
              handleClick={cancel}
              isBackground={true}
              styles="mr-2"
            />
            <IconButton
              name="tick"
              handleClick={(e) => handleSubmit(e)}
              isBackground={true}
              isAccent={true}
            />
          </div>
        </div>
      </form>
    )
  );
};

export default EventForm;
