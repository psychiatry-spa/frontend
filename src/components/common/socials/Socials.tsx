import { IconButton } from "../../admin/nav-bar/IconButton";
import Icon from "../icon/icon";

interface Props {
  text: string;
}

const Socials = ({ text }: Props) => (
  <div>
    <div className="flex justify-between items-center mt-3">
      <div className="flex-grow border-t-2 border-primary-700"></div>
      <p className="px-3 text-xl font-medium text-primary">{text}</p>
      <div className="flex-grow border-t-2 border-primary-700"></div>
    </div>
    <div className="flex justify-center">
      <IconButton name="facebook" />
      <Icon name="google" />
    </div>
  </div>
);

export default Socials;
