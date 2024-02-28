import AreaChartComponent from "../area-chart/AreaChartComponent";
import ConsultationComponent from "../consultation/ConsultationComponent";
import Statistics from "../Statistics/Statistics";

const Content = () => {
  return (
    <main className="relative max-w-full h-full px-4">
      <div className="pt-2 grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <AreaChartComponent />
        <Statistics />
        <ConsultationComponent />
      </div>
    </main>
  );
};

export default Content;
