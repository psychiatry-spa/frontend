import { useState } from "react";
import Icon from "../Icon";

interface Props {
  options: string[];
  isDots?: boolean;
  updateState?: (arg: string) => void;
  styles?: string;
}

const MenuButton = ({
  options,
  isDots = false,
  updateState,
  styles = "",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonName, setButtonName] = useState(options[0]);

  const getStyles = () => {
    let updatedStyles = styles;
    updatedStyles +=
      " text-primary-800 hover:text-primary dark:text-primary-200 dark:hover:text-primary-100";
    updatedStyles +=
      " p-2 rounded-full bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700";

    return updatedStyles;
  };

  const handleSelect = (index: number) => {
    if (updateState) updateState(options[index]);
    setIsOpen(!isOpen);
    setButtonName(options[index]);
  };

  return (
    <div
      className={`${styles} relative py-1 px-3 rounded-lg text-sm ${getStyles()}`}
    >
      <button
        className="font-medium flex items-center h-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isDots && <span className="mr-2">{buttonName}</span>}
        <Icon name={isDots ? "menu" : "arrow-bottom"} styles="size-3" />
      </button>
      {isOpen && (
        <ul
          className="absolute top-10 left-0 z-50 w-32 cursor-pointer border rounded-lg p-2 border-primary-200 bg-white dark:border-dark-border dark:bg-dark-container"
        >
          {options.map((option, index) => (
            <li
              className="p-1 bg-white hover:bg-primary-005 dark:bg-dark-container"
              key={index}
              onClick={() => handleSelect(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuButton;
