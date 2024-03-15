import { ChildrenProps } from "../../types/types";

interface ButtonProps extends ChildrenProps {
  bgColor?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ children, bgColor = "primary", type = "button" }) => {
  return (
    <button type={type} className={bgColor}>
      {children}
    </button>
  );
};

export default Button;
