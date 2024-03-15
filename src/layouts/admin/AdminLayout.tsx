import React, { useState } from "react";
import NavBar from "../../components/admin/nav-bar/NavBar";
import Sidebar from "../../components/admin/side-bar/SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <NavBar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <Sidebar isSidebar={isSidebar} />
      <div className="pt-[71px] lg:ml-52">{children}</div>
    </>
  );
};

export default Layout;
