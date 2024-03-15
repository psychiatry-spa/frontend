import Container from "../../../layouts/admin/Container";
import ChartBar from "./BarChart";
import ConsultationsCount from "./ConsultationsCount";

const ConsultationComponent = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between pb-4 sm:flex-row">
        <div className="flex-1 min-w-0 mr-auto">
          <ConsultationsCount />
        </div>
        <div className="flex-1 min-w-0 w-full">
          <ChartBar />
        </div>
      </div>
    </Container>
  );
};

export default ConsultationComponent;
