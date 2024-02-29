import { useState } from "react";
import Navbar from "../components/admin/admin-nav-bar/NavBar";
import Sidebar from "../components/admin/sidebar/SideBar";
import Content from "../components/main/content";
import Statistics from "../components/admin/Statistics/Statistics";

const AdminHome = () => {
  const [isSidebar, setSidebar] = useState(false);
  return (
    <>
      <Navbar isSidebar={isSidebar} setIsSidebar={setSidebar} />
      <Sidebar isSidebar={isSidebar} />
      <Content>
        <Statistics />
        <Statistics />
      </Content>
    </>
  );
};

export default AdminHome;
