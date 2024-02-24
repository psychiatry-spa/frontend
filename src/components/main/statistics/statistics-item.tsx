import Icon from "../../common/icon";

interface Props {
  name: string;
  percentage: string;
  data: string;
}

const StatisticsItem = ({ name, percentage, data }: Props) => {
  return (
    <li className="flex py-4 border-b border-gray-200 dark:border-gray-700 justify-between">
      <div className="flex">
        <Icon name="lock" styles="size-10" />
        <div className="pl-4">
          <span className="font-semibold text-gray-900 dark:text-white">
            {name}
          </span>
          <div className="flex items-center text-sm">
            <Icon
              name="pie-chart"
              styles="size-4 text-green-600 dark:text-green-400"
            />
            <span className="text-green-600 dark:text-green-400 font-medium">
              {percentage}%
            </span>
            <span className="ml-2 text-gray-500 dark:text-gray-400 ">
              vs last month
            </span>
          </div>
        </div>
      </div>
      <span className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
        {data}
      </span>
    </li>
  );
};

export default StatisticsItem;
