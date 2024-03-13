import { ChildrenProps } from "../../components/types/types";

const AuthGrid = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto w-2/3 mt-10 grid gap-4 grid-cols-[auto,auto] grid-rows-[200px,auto]">
      {children}
    </div>
  );
};

export default AuthGrid;
