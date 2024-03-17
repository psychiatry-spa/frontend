import React from "react";
import NavBar from "./NavBar";
import Container from "../admin/Container";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="pt-20 flex justify-center">{children}</div>
    </>
  );
};

export default Layout;
