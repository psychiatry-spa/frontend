import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center h-full bg-primary-005">
        <div className="w-full pt-[78px]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
