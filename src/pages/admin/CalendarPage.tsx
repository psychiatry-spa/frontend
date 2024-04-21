import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";

import Content from "../../components/admin/content/Content";
import EventList from "../../components/common/event-list/EventList";
import Calendar from "../../components/common/calendar/Calendar";
import AdminLayout from "../../layouts/admin/AdminLayout";

import useEvents from "../../hooks/api/google-events/useEvents";

const CalendarPage = () => {
  const today = startOfToday();

  const [selectedDate, setSelectedDate] = useState(today);
  const { events, error, isLoading, setEvents, setError } = useEvents();

  const meetings = [
    {
      id: 1,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-11T13:00",
      endDatetime: "2022-05-11T14:30",
    },
    {
      id: 2,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-20T09:00",
      endDatetime: "2022-05-20T11:30",
    },
    {
      id: 3,
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-20T17:00",
      endDatetime: "2022-05-20T18:30",
    },
    {
      id: 4,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-06-09T13:00",
      endDatetime: "2022-06-09T14:30",
    },
  ];

  const eventsForSelectedDate = selectedDate
    ? events.filter((event) => {
        const eventDate = new Date(event.start.dateTime);
        return (
          eventDate.getFullYear() === selectedDate.getFullYear() &&
          eventDate.getMonth() === selectedDate.getMonth() &&
          eventDate.getDate() === selectedDate.getDate()
        );
      })
    : [];

  console.log(error);

  return (
    <AdminLayout>
      <Content columns="grid-cols-7">
        <EventList day={selectedDate} events={meetings} />
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
