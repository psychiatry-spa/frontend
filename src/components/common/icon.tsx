import sprite from "../../assets/sprite.svg";

interface Props {
  name: string;
  styles?: string;
}

const Icon = ({ name, styles }: Props) => {
  return (
    <svg fill="currentColor" className={`${styles}`}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
