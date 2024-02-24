import ChartBar from "./charts/BarChart";
import ConsultationsCount from "./ConsultationsCount";

const ConsultationComponent = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-between border rounded-lg px-5 pt-6 pb-12 sm:flex-row">
        <div className="flex-1 min-w-0 mr-auto">
          <ConsultationsCount />
        </div>
        <div className="flex-1 min-w-0 w-full">
          <ChartBar />
        </div>
      </div>
    </div>
  );
};

export default ConsultationComponent;
