import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";

import Content from "../../components/admin/content/Content";
import EventList from "../../components/common/event-list/EventList";
import Calendar from "../../components/common/calendar/Calendar";
import AdminLayout from "../../layouts/admin/AdminLayout";

import useEvents from "../../hooks/api/google-events/useEvents";

const CalendarPage = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);

  const { events, error, isLoading, setEvents, setError } = useEvents();

  console.log(error);

  return (
    <AdminLayout>
      <Content columns="grid-cols-7">
        <EventList day={selectedDay} />
        <Calendar
          today={today}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </Content>
    </AdminLayout>
  );
};

export default CalendarPage;
