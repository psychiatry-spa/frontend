import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="p-10 rounded-3xl border w-full max-w-lg bg-white">
      {children}
    </div>
  );
};

export default Container;
