import DataAreaChart from "./components/DataAreaChart";
import MenuButton from "../../common/buttons/MenuButton";
import Container from "../../../layouts/admin/Container";
import Icon from "../../common/icon";

const AreaChart = () => {
  return (
    <Container styles="col-span-12 xl:col-span-8">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold text-primary dark:text-primary-100">
          $4050,50
        </h1>
        <div className="font-semibold flex items-center text-green-600 dark:text-green-500">
          <Icon
            name="increased"
            styles="size-3 stroke-green-600 dark:stroke-green-500"
          />
          <span>5.0%</span>
        </div>
      </div>
      <div className="pb-6 text-primary-600 dark:text-primary-400">
        Income this week
      </div>
      <DataAreaChart />
      <div className="flex pt-4 border-t mt-1 w-full justify-between border-primary-300 dark:border-dark-border">
        <MenuButton
          options={["Last 7 days", "Last 30 days", "Last 90 days", "Last year"]}
        />
        <button className="flex items-center font-medium text-accent hover:text-accent-focus">
          Payments Report
        </button>
      </div>
    </Container>
  );
};

export default AreaChart;
