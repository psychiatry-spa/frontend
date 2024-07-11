import Container from "../../../layouts/admin/Container";
import EventItem from "./EventItem";
import MenuButton from "../buttons/MenuButton";

import { format } from "date-fns";
import { Event } from "../../../services/eventService";
import Icon from "../Icon";
import { useState } from "react";

interface Props {
  events: Event[];
}

const UpcomingEvents = ({ events }: Props) => {
  const [header, setHeader] = useState("Upcoming");
  return (
    <Container styles="col-span-2">
      <section className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-primary dark:text-primary-100">
            {header} Events
          </h2>
          <ol className="mt-4 max-h-[26.5rem] overflow-y-scroll">
            {events.length > 0 ? (
              events.map(({ summary, start, end }, idx) => (
                <EventItem
                  summary={summary}
                  start={start.dateTime}
                  end={end.dateTime}
                />
              ))
            ) : (
              <p className="text-primary dark:text-primary-100">
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
