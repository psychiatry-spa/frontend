import DataAreaChart from "./components/DataAreaChart";
import MenuButton from "../../common/buttons/MenuButton";
import Container from "../../../layouts/admin/Container";
import Icon from "../../common/icon";

const AreaChart = () => {
  return (
    <Container styles="col-span-3 xl:col-span-2">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold text-primary dark:text-white">
          $4050,50
        </h1>
        <div className="text-green-600 font-semibold flex items-center">
          <Icon name="increased" styles="size-3 stroke-green-600" />
          <span>5.0%</span>
        </div>
      </div>
      <div className="text-primary-600 pb-6">Income this week</div>
      <DataAreaChart />
      <div className="flex pt-4 border-t border-primary-300 dark:border-gray-700 mt-1 w-full justify-between">
        <MenuButton
          options={["Last 7 days", "Last 30 days", "Last 90 days", "Last year"]}
        />
        <button className="flex items-center font-medium text-accent hover:text-accent-focus dark:text-blue-500 dark:hover:text-white">
          Payments Report
        </button>
      </div>
    </Container>
  );
};

export default AreaChart;
