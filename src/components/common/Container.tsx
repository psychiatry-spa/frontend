import React from "react";

interface Props {
  children: React.ReactNode;
  styles?: string;
}

const Container = ({ children, styles }: Props) => {
  return (
    <div className={`${styles} p-10 md:m-2 md:rounded-b-3xl rounded-t-3xl border w-full bg-white`}>
      {children}
    </div>
  );
};

export default Container;
