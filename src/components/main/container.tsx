interface Props {
  children: JSX.Element[];
}

const Container = ({ children }: Props) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};

export default Container;
