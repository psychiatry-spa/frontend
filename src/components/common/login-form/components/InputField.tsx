import { InputHTMLAttributes, useState } from "react";
import Icon from "../../Icon";

interface Props {
  name: string;
  data: string;
  type: string;
  styles?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autocomplete?: string;
}

const InputField = ({ name, data, type, styles, handleChange, placeholder, autocomplete }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <div className={`relative ${styles}`}>
      <Icon name={type} styles="size-8 absolute inset-y-0 left-0 pl-3 mt-4" />
      {type === "password" && (
        <button type="button" onClick={handleClick}>
          <Icon
            name={isActive ? "hide" : "show"}
            styles="size-10 absolute inset-y-0 right-3 pl-3 mt-3.5"
          />
        </button>
      )}
      <input
        className={`pl-10 placeholder-secondary border rounded-xl border-primary-500 w-full p-3 my-2 outline-none bg-primary-005 focus:bg-white`}
        type={isActive && type === "password" ? "text" : type}
        name={name}
        value={data}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : `Enter your ${type}`}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default InputField;
