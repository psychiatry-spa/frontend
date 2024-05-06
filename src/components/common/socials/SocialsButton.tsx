import Icon from "../Icon";
import { API_ENDPOINTS as api } from "../../../constants";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  handleClick?: () => void;
}

export const SocialsButton = ({ name, handleClick }: Props) => {
  let endpoint = "/";
  if (name === "google") endpoint = api.googleLogin;
  return (
    <Link to={endpoint}>
      <button
        type="button"
        className="border border-accent rounded-full mx-3"
        onClick={handleClick}
      >
        <Icon name={name} styles="size-10 m-2 stroke-none" />
      </button>
    </Link>
  );
};
