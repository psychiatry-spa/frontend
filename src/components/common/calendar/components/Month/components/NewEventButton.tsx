import React, { useState } from "react";

const NewEventButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative w-full"
    >
      <button
        className="w-full "
        onClick={() => setIsOpen(!isOpen)}
      >
      </button>
      {isOpen && (
        <ul className="absolute top-10 left-0 z-50 w-32 cursor-pointer border rounded-lg p-2 border-primary-200 bg-white dark:border-dark-border dark:bg-dark-container">
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

export default NewEventButton;
