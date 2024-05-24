import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const handleSidebar = () => setIsSidebar(!isSidebar);
  return (
    <div className="bg-primary-005 h-full dark:bg-dark-background">
      <NavBar handleClick={handleSidebar} />
      <Sidebar isSidebar={isSidebar} />
      <div className="pt-20 mx-2 lg:ml-60">{children}</div>
    </div>
  );
};

export default Layout;