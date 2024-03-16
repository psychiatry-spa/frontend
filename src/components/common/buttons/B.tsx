import { ChildrenProps } from "../../types/types";

interface ButtonProps extends ChildrenProps {
  styles?: string;
  type?: "button" | "submit";
}

const Button = ({ children, styles, type = "button" }: ButtonProps) => {
  return (
    <button type={type} className={`py-4 rounded-xl ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
