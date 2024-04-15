import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-primary-005">
        <div className="pt-20 grid grid-cols-9 gap-4 w-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
