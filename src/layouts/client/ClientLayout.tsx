import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Layout;
