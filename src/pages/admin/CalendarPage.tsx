import { useState } from "react";
import { startOfToday } from "date-fns/startOfToday";
import Content from "../../components/admin/content/Content";
import Calendar from "../../components/admin/calendar/Calendar";
import UpcomingMeetings from "../../components/admin/calendar/UpcomingMeetings";
import AdminLayout from "../../layouts/admin/AdminLayout";

const CalendarPage = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  return (
      <AdminLayout>
          <Content>
            <Calendar
              today={today}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
            <UpcomingMeetings selectedDay={selectedDay} />
          </Content>
      </AdminLayout>
  );
};

export default CalendarPage;
