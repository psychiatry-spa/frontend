import { ChildrenProps } from "../../components/types/types";

const Container = ({ children}: ChildrenProps) => {
  return (
    <div
      className={`p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 xl:col-span-1 h-full`}
    >
      {children}
    </div>
  );
};

export default Container;
