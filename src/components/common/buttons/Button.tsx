import { ChildrenProps } from "../../types/types";

interface ButtonProps extends ChildrenProps {
  style: string;
  styles?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  style,
  styles,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) => {
  if (disabled) styles += " text-white bg-disabled";
  else if (style === "primary") styles += " text-white bg-accent hover:bg-accent-focus";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`py-4 rounded-xl outline-none ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
