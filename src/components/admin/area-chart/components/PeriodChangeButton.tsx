import { useState } from "react";

const PeriodChangeButton = () => {
  const options = ["Last 7 days", "Last 30 days", "Last 90 days", "Last year"];
  const [isOpen, setIsOpen] = useState(false);
  const [buttonName, setButtonName] = useState(options[0])

  const handleSelect = (index: number) => {
    setIsOpen(false);
    setButtonName(options[index])
  };

  return (
    <div className="relative">
      <button
        className="font-medium text-gray-500 hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonName}
      </button>
      {isOpen && (
        <ul className="absolute bg-white bottom-full left-0 z-50 w-32 cursor-pointer border rounded-lg py-2">
          {options.map((option, index) => (
            <li
              className="p-3 bg-white font-medium text-gray-500 hover:bg-gray-200"
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

export default PeriodChangeButton;
