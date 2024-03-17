import sprite from "../../../assets/sprite.svg";

interface Props {
  name: string;
  styles?: string;
}

const Icon = ({ name, styles }: Props) => {
  return (
    <svg className={styles}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
// fill="currentColor" stroke="currentColor"
