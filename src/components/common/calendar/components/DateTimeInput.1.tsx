import { format } from "date-fns";
import { Props } from "./DateTimeInput";

export const DateTimeInput = ({
  dateTime,
  labelText,
  handleChange,
  defaultTime,
  styles = "",
}: Props) => {
  const [input, setInput] = useState();
  const formatInputs = () => {};
  return (
    <div className="w-full grid grid-cols-4 pt-1 place-items-start">
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
        defaultValue={format(defaultTime, "HH:mm")}
        onChange={(e) => handleChange(e)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full text-nowrap text-xs outline-none placeholder-primary-600 text-primary 
                dark:bg-dark-container dark:border-dark-container dark:placeholder-primary-300"
      />
    </div>
  );
};
