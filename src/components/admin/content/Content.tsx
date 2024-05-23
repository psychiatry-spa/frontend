import { ChildrenProps } from "../../types/types";

interface Props extends ChildrenProps {
  columns?: string;
}

const Content = ({ children, columns = "grid-cols-12" }: Props) => {
  return (
    <main className="relative max-w-full h-full mx-4">
      <div className={`pt-4 grid gap-4 ${columns}`}>{children}</div>
    </main>
  );
};

export default Content;
