import { useState } from "react";
import Icon from "../icon";

interface Props {
  options: string[];
  isDots?: boolean;
}

const MenuButton = ({ options, isDots = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonName, setButtonName] = useState(options[0]);

  const handleSelect = (index: number) => {
    setIsOpen(false);
    setButtonName(options[index]);
  };
  return (
    <div className=" flex justify-end text-primary-700 hover:text-primary-800 8">
      <div className="relative hover:bg-primary-005 py-1 px-3 rounded-full">
        <button
          className="font-medium flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isDots && <span className="mr-2">{buttonName}</span>}

          <Icon
            name={isDots ? "menu" : isOpen ? "arrow-top" : "arrow-bottom"}
            styles="size-3"
          />
        </button>
        {isOpen && (
          <ul className="absolute bg-white bottom-full left-0 z-50 w-32 cursor-pointer border rounded-lg p-2">
            {options.map((option, index) => (
              <li
                className="p-1 bg-white hover:bg-primary-005"
                key={index}
                onClick={() => handleSelect(index)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuButton;
