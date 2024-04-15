interface Props {
  children: React.ReactNode;
  styles?: string;
}

const Container = ({ children, styles = "" }: Props) => {
  return (
    <div
      className={`p-6 bg-white border border-primary-200 rounded-lg dark:bg-dark-container dark:border-dark-border h-full ${styles}`}
    >
      {children}
    </div>
  );
};

export default Container;
