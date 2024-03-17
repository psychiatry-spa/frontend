import { ChildrenProps } from "../../types/types";

const Content = ({ children }: ChildrenProps) => {
  return (
    <main className="relative max-w-full h-full px-4">
      <div className="pt-4 grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        {children}
      </div>
    </main>
  );
};

export default Content;
