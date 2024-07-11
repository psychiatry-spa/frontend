import Icon from "../Icon";
import MenuButton from "../buttons/MenuButton";
import { format } from "date-fns";

// todo: replace it with Event interface
interface Props {
  summary: string;
  start: string;
  end: string;
}

const EventItem = ({ summary, start, end }: Props) => {
  return (
    <li className="flex justify-between items-start py-4 border-b border-primary-300">
      <div className="flex">
        <img src={"imageUrl"} alt="" className="rounded-full size-14" />
        <div className="flex flex-col pl-5">
          <span className="font-semibold text-primary text-base pb-1">
            {summary}
          </span>
          <div className="flex justify-start items-center text-primary-600 pt-1">
            <Icon name="date" styles="size-4 mr-2" />
            <span className="text-sm leading-6">
              {format(start, "MMMM do, HH:mm")}
            </span>
          </div>

          <div className="flex justify-start items-center text-primary-600 pt-1">
            <Icon name="time" styles="size-4 mr-2" />
            <span className="text-sm leading-6">Online</span>
          </div>
          
        </div>
      </div>
      <MenuButton options={["Reschedule", "Cancel"]} isDots={true} />
    </li>
  );
};

export default EventItem;
