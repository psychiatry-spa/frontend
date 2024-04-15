import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";
import Content from "../../components/admin/content/Content";
import EventList from "../../components/common/event-list/EventList";
import Calendar from "../../components/common/calendar/Calendar";
import AdminLayout from "../../layouts/admin/AdminLayout";
import Container from "../../components/common/Container";

const CalendarPage = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <AdminLayout>
      <Content columns="grid-cols-7">
        <EventList />
        <Container styles="col-span-4">
          <Calendar
            today={today}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </Container>
      </Content>
    </AdminLayout>
  );
};

export default CalendarPage;
