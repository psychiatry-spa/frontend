import { useState } from "react";
import Navbar from "../components/nav/navbar";
import Sidebar from "../components/sidebar/sidebar";
import Content from "../components/main/content";
import Statistics from "../components/main/statistics/statistics";

const AdminHome = () => {
  const [isSidebar, setSidebar] = useState(false);
  return (
    <>
      <Navbar isSidebar={isSidebar} setSidebar={setSidebar} />
      <Sidebar isSidebar={isSidebar} />
      <Content>
        <Statistics />
        <Statistics />
      </Content>
    </>
  );
};

export default AdminHome;
