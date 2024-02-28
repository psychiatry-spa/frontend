import sprite from "../../assets/sprite.svg";

interface Props {
  name: string;
  styles?: string;
}

const Icon = ({ name, styles }: Props) => {
  return (
    <svg fill="currentColor" stroke="currentColor" className={`${styles}`}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
