import Container from "../../../layouts/admin/Container";
import EventItem from "./EventItem";
import MenuButton from "../buttons/MenuButton";

import { format } from "date-fns";
import { Event } from "../../../services/event-service";

interface Props {
  day: Date;
  events: Event[];
}

const EventList = ({ day, events }: Props) => {
  return (
    <Container styles="col-span-3">
      <section>
        <h2 className="text-xl font-semibold text-primary">
          Upcoming Events - {format(day, "d MMMM")}
        </h2>
        <ol className="mt-4">
          {events.length > 0 ? (
            events.map(
              ({ id, name, imageUrl, startDatetime, endDatetime }) => (
                <EventItem
                  id={id}
                  name={name}
                  imageUrl={imageUrl}
                  start={startDatetime}
                  end={endDatetime}
                />
              )
            )
          ) : (
            <p>No meetings for today.</p>
          )}
        </ol>
        <div className="mt-4">
          <MenuButton options={["Upcoming", "Past", "Canceled"]} />
        </div>
      </section>
    </Container>
  );
};

export default EventList;
