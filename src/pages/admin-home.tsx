import { useState } from "react";
import Navbar from "../components/nav/navbar";
import Sidebar from "../components/sidebar/sidebar";
import Content from "../components/main/content";

const AdminHome = () => {
  const [isSidebar, setSidebar] = useState(false);
  return (
    <>
      <Navbar isSidebar={isSidebar} setSidebar={setSidebar} />
      <Sidebar isSidebar={isSidebar} />
      <Content />
    </>
  );
};

export default AdminHome;
