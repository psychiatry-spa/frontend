import React from "react";
import NavBar from "../../components/client/navbar/NavBar";

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
