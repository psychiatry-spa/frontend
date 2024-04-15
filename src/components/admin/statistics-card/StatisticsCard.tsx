import Container from "../../../layouts/admin/Container";
import Icon from "../../common/icon";

interface StatisticsCardProps {
  totalAmount?: number;
  totalLabel?: string;
  growthRate?: number;
  iconName: string;
}

const StatisticsCard = ({
  totalAmount = 1632,
  totalLabel = "money",
  growthRate = 4.53,
  iconName = "repository"
}: StatisticsCardProps) => {
  return (
    <Container styles="col-span-3">
      <div className="w-10 h-10 bg-slate-300 rounded-full pt-2 pl-2">
        <Icon name={iconName.toLowerCase()} styles="size-6 fill-slate-500" />
      </div>
      <div className="flex justify-between">
        <div className="mt-5">
          <span className="font-semibold text-2xl text-primary dark:text-primary-100">${totalAmount}</span>
          <p className="mt-1 text-primary-600 dark:text-primary-400">Total {totalLabel}</p>
        </div>
        <div className="flex items-center text-sm mt-auto">
          <Icon name="increased" styles="size-3 stroke-green-600" />
          <span className="text-green-600 dark:text-green-400 font-medium">
            {growthRate}%
          </span>
        </div>
      </div>
    </Container>
  );
};

export default StatisticsCard;
