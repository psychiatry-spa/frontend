import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-dvh bg-primary-005">
        <div className="mt-20">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
