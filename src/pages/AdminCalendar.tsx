import { useState } from "react";
import Navbar from "../components/admin/admin-nav-bar/NavBar";
import Sidebar from "../components/admin/sidebar/SideBar";
import Content from "../components/main/content";
import Calendar from "../components/admin/calendar/Calendar";
import UpcomingMeetings from "../components/admin/calendar/UpcomingMeetings";

import { startOfToday } from "date-fns/startOfToday";

const AdminCalendar = () => {
  const today = startOfToday();
  const [isSidebar, setSidebar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <>
      <Navbar isSidebar={isSidebar} setIsSidebar={setSidebar} />
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
