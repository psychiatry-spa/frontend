import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";

import Content from "../../components/admin/content/Content";
// import UpcomingEvents from "../../components/common/event-list/UpcomingEvents";
// import EventsForSelectedDate from "../../components/common/event-list/EventsForSelectedDate";
import Calendar from "../../components/common/calendar/Calendar";
import AdminLayout from "../../layouts/admin/AdminLayout";

// import useEvents from "../../hooks/api/events/useEvents";
// import { useQuery } from "react-query";
// import axios from "axios";
// import UpcomingEvents from "../../components/common/event-list/UpcomingEvents";
// import EventsForSelectedDate from "../../components/common/event-list/EventsForSelectedDate";
// import useEvents from "../../hooks/api/events/useEvents";

import { Event } from "../../services/eventService";

const CalendarPage = () => {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(today);

  // Temp, onli for mocking data
  let timeForToday = new Date();
  let timeForTomorrow = new Date(timeForToday.getTime() + 24 * 60 * 60000);
  let timeForNextMonth = new Date(
    new Date().setMonth(timeForToday.getMonth() + 1)
  );

  // console.log(new Date(timeForToday).getDate());
  // console.log(new Date(timeForTomorrow).getDate());
  // console.log(timeForTomorrow.getDate());

  const events: Event[] = [
    {
      _id: "string",
      googleEventId: "string",
      user: "string",
      summary: "Today 1",
      start: { dateTime: timeForToday.toISOString() },
      end: {
        dateTime: new Date(timeForToday.getTime() + 30 * 60000).toISOString(),
      },
    },
    {
      _id: "string",
      googleEventId: "string",
      user: "string",
      summary: "Today 2",
      start: { dateTime: timeForToday.toISOString() },
      end: {
        dateTime: new Date(timeForToday.getTime() + 30 * 60000).toISOString(),
      },
    },
    {
      _id: "string",
      googleEventId: "string",
      user: "string",
      summary: "Tomorrow",
      start: { dateTime: timeForTomorrow.toISOString() },
      end: {
        dateTime: new Date(
          timeForTomorrow.getTime() + 30 * 60000
        ).toISOString(),
      },
    },
    {
      _id: "string",
      googleEventId: "string",
      user: "string",
      summary: "Next Month",
      start: {
        dateTime: timeForNextMonth.toISOString(),
      },
      end: {
        dateTime: new Date(
          timeForNextMonth.getTime() + 90 * 60000
        ).toISOString(),
      },
    },
  ];

  console.log(timeForNextMonth);
  // console.log(new Date(events[0].start.dateTime).getDate());
  // console.log(new Date(timeForToday).getDate());
  // console.log(timeForTomorrow.getDate());

  // console.log(timeForToday);

  // const { events, error, isLoading, setEvents, setError } = useEvents();
  // ("http://localhost:3000/api/admin/events");
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
        {/* <UpcomingEvents day={selectedDate} events={ev} /> */}
        <Calendar
          today={today}
          events={events}
          selectedDay={selectedDate}
          setSelectedDay={setSelectedDate}
        />
      </Content>
    </AdminLayout>
  );
};

export default CalendarPage;
