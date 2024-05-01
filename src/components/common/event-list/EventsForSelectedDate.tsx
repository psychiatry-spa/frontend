import Container from "../../../layouts/admin/Container";
import EventItem from "./EventItem";
import MenuButton from "../buttons/MenuButton";

import { format } from "date-fns";
import { Event } from "../../../services/eventService";
import Icon from "../Icon";
import { IconButton } from "../buttons/IconButton";

interface Props {
  day: Date;
  events: Event[];
}

const EventsForSelectedDate = ({ day, events }: Props) => {
  return (
    <Container styles="col-span-2">
      <section>
        <h2 className="text-xl font-semibold text-primary">
          Consultations - {format(day, "d MMMM")}
        </h2>
        <IconButton name="plus" isBackground={true} isAccent={false} />
        <ol className="mt-4">
          {events.length > 0 ? (
            events.map(({ id, name, imageUrl, startDatetime, endDatetime }) => (
              <EventItem
                id={id}
                name={name}
                imageUrl={imageUrl}
                start={startDatetime}
                end={endDatetime}
              />
            ))
          ) : (
            <p className="text-primary">No meetings for this day.</p>
          )}
        </ol>
      </section>
    </Container>
  );
};

export default EventsForSelectedDate;
