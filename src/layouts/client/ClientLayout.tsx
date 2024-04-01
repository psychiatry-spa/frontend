import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="pt-16 grid grid-cols-7 gap-4 max-w-screen-xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
