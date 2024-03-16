import sprite from "../../../assets/sprite.svg";
import icon from "../../../../../icons/facebook.svg";

interface Props {
  name: string;
  styles?: string;
}

const Icon = ({ name, styles }: Props) => {
  return (
    // <img src={icon} alt="" />
    <svg className="w-6 h-6">
      <use href={`${sprite}#facebook`} />
    </svg>
  );
};

export default Icon;
// fill="currentColor" stroke="currentColor"
