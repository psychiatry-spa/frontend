import { format } from "date-fns";

interface Props {
  dateTime: string;
  labelText: string;
  defaultTime: number;
  styles?: string;
}

const DateTimeInput = ({
  dateTime,
  labelText,
  styles = "",
}: Props) => {
  return (
    <div className="grid grid-cols-4 pt-1">
      <label htmlFor={`${labelText}`} className="text-xs text-primary">
        {labelText[0].toUpperCase() + labelText.slice(1).toLowerCase()}:
      </label>
      <input
        type="date"
        id={`${labelText}`}
        defaultValue={format(dateTime, "yyyy-MM-dd")}
        onClick={(e) => e.stopPropagation()}
        className={`${styles} col-span-2 w-full text-nowrap text-xs outline-none placeholder-primary-600 text-primary 
                dark:bg-dark-container dark:border-dark-container dark:placeholder-primary-300`}
      />
      <input
        type="time"
        defaultValue={format(dateTime, "HH:mm")}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full text-nowrap text-xs outline-none placeholder-primary-600 text-primary 
                dark:bg-dark-container dark:border-dark-container dark:placeholder-primary-300"
      />
    </div>
  );
};

export default DateTimeInput;
