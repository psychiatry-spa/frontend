import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {/* TODO: h-full or h-dvh  */}
      <div className="flex justify-center items-center h-full bg-red-500">
        <div className="mt-20">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
