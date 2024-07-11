import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";

import Content from "../../components/admin/content/Content";
import UpcomingEvents from "../../components/common/event-list/UpcomingEvents";
import Calendar from "../../components/common/calendar/Calendar";
import AdminLayout from "../../layouts/admin/AdminLayout";

import useEvents from "../../hooks/api/events/useEvents";

const CalendarPage = () => {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(today);

  const { data: events, error, isLoading } = useEvents();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

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
        <UpcomingEvents events={events || []} />
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
