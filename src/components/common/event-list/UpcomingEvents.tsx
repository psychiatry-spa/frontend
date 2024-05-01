import Container from "../../../layouts/admin/Container";
import EventItem from "./EventItem";
import MenuButton from "../buttons/MenuButton";

import { format } from "date-fns";
import { Event } from "../../../services/eventService";
import Icon from "../Icon";
import { useState } from "react";

interface Props {
  day: Date;
  events: Event[];
}

const UpcomingEvents = ({ day, events }: Props) => {
  const [header, setHeader] = useState("Upcoming");
  return (
    <Container styles="col-span-2">
      <section className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-primary">
            {header} Events
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
              <p className="text-primary">
                No more {header.toLowerCase()} events.
              </p>
            )}
          </ol>
        </div>
        <div className="mt-4">
          <MenuButton
            options={["Upcoming", "Past", "Canceled"]}
            updateState={setHeader}
          />
        </div>
      </section>
    </Container>
  );
};

export default UpcomingEvents;
