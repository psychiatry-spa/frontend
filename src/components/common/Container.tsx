import React from "react";

interface Props {
  children: React.ReactNode;
  styles?: string;
}

const Container = ({ children, styles = "col-span-7" }: Props) => {
  return (
    <div className={`p-10 m-2 rounded-3xl border w-full bg-white ${styles}`}>
      {children}
    </div>
  );
};

export default Container;
