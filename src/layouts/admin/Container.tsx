interface Props {
  children: React.ReactNode;
  styles?: string;
}

const Container = ({ children, styles = "" }: Props) => {
  return (
    <div
      className={`p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 h-full ${styles}`}
    >
      {children}
    </div>
  );
};

export default Container;
