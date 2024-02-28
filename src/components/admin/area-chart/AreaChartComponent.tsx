import MainCounter from "./components/MainCounter";
import DataAreaChart from "./components/DataAreaChart";
import WeeklyChangeCounter from "./components/WeeklyChangeCounter";
import ReportButton from "./components/ReportButton";
import PeriodChangeButton from "./components/PeriodChangeButton";
import Container from "../../../layouts/admin/Container";

const AreaChartComponent = () => {
  return (
    <Container colSpanXL={2}>
        <div className="flex pb-10 w-full">
          <MainCounter />
          <WeeklyChangeCounter />
        </div>
        <DataAreaChart />
        <div className="flex pt-10 border-t dark:border-gray-700 mt-10 w-full">
          <PeriodChangeButton />
          <ReportButton />
        </div>
    </Container>
  );
};

export default AreaChartComponent;
