import Icon from "../../common/icon";

interface Props {
  name: string;
  percentage: string;
  data: string;
}

const StatisticsItem = ({ name, percentage, data }: Props) => {
  return (
    <li className="flex py-4 border-b border-primary-300 dark:border-gray-700 justify-between">
      <div className="flex">
        <Icon name="name" styles="size-10" />
        <div className="pl-4">
          <span className="font-semibold text-primary dark:text-white">
            {name}
          </span>
          <div className="flex items-center text-sm mt-1">
            <Icon
              name="increased"
              styles="size-3 stroke-green-600"
            />
            <span className="text-green-600 dark:text-green-400 font-medium">
              {percentage}%
            </span>
            <span className="ml-2 text-primary-500 dark:text-gray-400 ">
              vs last month
            </span>
          </div>
        </div>
      </div>
      <span className="flex items-center text-lg font-semibold text-primary dark:text-white">
        {data}
      </span>
    </li>
  );
};

export default StatisticsItem;
