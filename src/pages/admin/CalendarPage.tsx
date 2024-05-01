import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";

import Content from "../../components/admin/content/Content";
// import UpcomingEvents from "../../components/common/event-list/UpcomingEvents";
// import EventsForSelectedDate from "../../components/common/event-list/EventsForSelectedDate";
import Calendar from "../../components/common/calendar/Calendar";
import AdminLayout from "../../layouts/admin/AdminLayout";

// import useEvents from "../../hooks/api/events/useEvents";
import { useQuery } from "react-query";
import axios from "axios";
import UpcomingEvents from "../../components/common/event-list/UpcomingEvents";
import EventsForSelectedDate from "../../components/common/event-list/EventsForSelectedDate";

interface Event {
  id: string;
  eventId: string;
  userId: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

const CalendarPage = () => {
  const today = startOfToday();

  const ev = [];

  const [selectedDate, setSelectedDate] = useState(today);
  // const { events, error, isLoading, setEvents, setError } = useEvents();
  // "http://localhost:3000/api/admin/events"
  // const getEvents = () =>
  //   axios
  //     .get<Event[]>("http://localhost:3000/api/admin/events")
  //     .then((res) => res.data);

  // const {
  //   data: events,
  //   error,
  //   isLoading,
  // } = useQuery<Event[], Error>({
  //   queryKey: ["event"],
  //   queryFn: getEvents,
  // });

  // if (isLoading) return <p>Loading...</p>;

  // if (error) return <p>{error.message}</p>;

  // console.log(events);

  // const eventsForSelectedDate = selectedDate
  //   ? events.filter((event) => {
  //       const eventDate = new Date(event.start.dateTime);
  //       return (
  //         eventDate.getFullYear() === selectedDate.getFullYear() &&
  //         eventDate.getMonth() === selectedDate.getMonth() &&
  //         eventDate.getDate() === selectedDate.getDate()
  //       );
  //     })
  //   : [];

  return (
    <AdminLayout>
      <Content columns="grid-cols-6">
        <UpcomingEvents day={selectedDate} events={ev} />
        <EventsForSelectedDate day={selectedDate} events={ev} />
        <Calendar
          today={today}
          selectedDay={selectedDate}
          setSelectedDay={setSelectedDate}
        />
      </Content>
    </AdminLayout>
  );
};

export default CalendarPage;
