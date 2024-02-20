import { Statistics } from "./statistics/statistics";

export const Content = () => {
  return (
    <main className="relative max-w-full h-full lg:ml-64 px-4 pt-20">
      <div className="pt-2 grid gap-4 xl:grid-cols-3 2xl-grid-cols-3">
        <Statistics />
        <Statistics />
        <Statistics />
      </div>
    </main>
  );
};
