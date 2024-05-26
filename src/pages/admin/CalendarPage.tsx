import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";

import Content from "../../components/admin/content/Content";
// import UpcomingEvents from "../../components/common/event-list/UpcomingEvents";
// import EventsForSelectedDate from "../../components/common/event-list/EventsForSelectedDate";
import Calendar from "../../components/common/calendar/Calendar";
import AdminLayout from "../../layouts/admin/AdminLayout";

import useEvents from "../../hooks/api/events/useEvents";
import { useQuery } from "react-query";
import axios from "axios";
import UpcomingEvents from "../../components/common/event-list/UpcomingEvents";
// import EventsForSelectedDate from "../../components/common/event-list/EventsForSelectedDate";
// import useEvents from "../../hooks/api/events/useEvents";

import { Event } from "../../services/eventService";

const CalendarPage = () => {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(today);

  // const { data: events, error, isLoading } = useEvents();
  // ("http://localhost:3000/api/admin/events");
  const getEvents = () =>
    axios
      .get<Event[]>("http://localhost:3000/api/admin/events", {
        withCredentials: true,
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => res.data);

  const {
    data: events,
    error,
    isLoading,
  } = useQuery<Event[], Error>({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  console.log(events);

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
        <UpcomingEvents events={events?.slice(0, 3) || []} />
        <Calendar
          today={today}
          events={events || []}
          selectedDay={selectedDate}
          setSelectedDay={setSelectedDate}
        />
      </Content>
    </AdminLayout>
  );
};

export default CalendarPage;
