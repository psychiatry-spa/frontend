import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="bg-primary-005 h-full dark:bg-dark-background">
      <NavBar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <div className={`${!isSidebar ? "ml-0" : "md:ml-60 ml-0"} transition-all duration-300 pt-20`}>{children}</div>
    </div>
  );
};

export default Layout;