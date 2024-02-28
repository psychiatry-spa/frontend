interface Props {
  children: JSX.Element[] | JSX.Element;
  colSpanXL?: number;
}

const Container = ({ children, colSpanXL = 1 }: Props) => {
  return (
    <div
      className={`p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 xl:col-span-1 2xl:col-span-${colSpanXL}`}
    >
      {children}
    </div>
  );
};

export default Container;
