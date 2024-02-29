import { IconButton } from "../admin-nav-bar/components/IconButton";

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  startDatetime: string;
  endDatetime: string;
}

const Meeting = ({ id, name, imageUrl, startDatetime, endDatetime }: Props) => {
  return (
    <li className="flex justify-between items-start py-4 border-b border-gray-200 dark:border-gray-700 ">
      <div className="flex">
        <img src={imageUrl} alt="" className="rounded-full size-14" />
        <div className="flex flex-col pl-4">
          <span className="font-semibold text-gray-900 dark:text-white">
            {name}
          </span>
          <span>{startDatetime}</span>
          <span>Time</span>
        </div>
      </div>
      <IconButton name="help" />
    </li>
  );
};

export default Meeting;
