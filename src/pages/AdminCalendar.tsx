import { useState } from "react";
import Navbar from "../components/nav/navbar";
import Sidebar from "../components/sidebar/sidebar";
import Content from "../components/main/content";
import Calendar from "../components/calendar/Calendar";
import UpcomingMeetings from "../components/calendar/UpcomingMeetings";

import { startOfToday } from "date-fns/startOfToday";

const AdminCalendar = () => {
  const today = startOfToday();
  const [isSidebar, setSidebar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <>
      <Navbar isSidebar={isSidebar} setSidebar={setSidebar} />
      <Sidebar isSidebar={isSidebar} />
      <Content>
        <Calendar
          today={today}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        <UpcomingMeetings selectedDay={selectedDay} />
      </Content>
    </>
  );
};

export default AdminCalendar;
