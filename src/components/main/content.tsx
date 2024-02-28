interface Props {
  children: JSX.Element[];
}

const Content = ({ children }: Props) => {
  return (
    <main className="relative max-w-full h-full lg:ml-64 px-4 pt-20">
      <div className="pt-2 grid gap-4 xl:grid-cols-3 2xl-grid-cols-3">
        {children}
      </div>
    </main>
  );
};

export default Content;
