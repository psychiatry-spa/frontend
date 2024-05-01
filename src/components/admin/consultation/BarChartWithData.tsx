import Container from "../../../layouts/admin/Container";
import Icon from "../../common/Icon";
import ChartBar from "./components/BarChart";

interface Props {
  text: string;
}

const Chart = ({ text }: Props) => {
  return (
    <Container styles="col-span-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-2xl font-semibold text-primary dark:text-primary-100">
              1.486
            </h4>
            <p className="text-primary-600 dark:text-primary-400">{text}</p>
          </div>
          <div className="flex items-center text-sm mt-1">
            <Icon name="increased" styles="size-3 stroke-green-600" />
            <span className="text-green-600 dark:text-green-400 font-medium">
              12,5%
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0 w-full">
        <ChartBar />
      </div>
    </Container>
  );
};

export default Chart;
