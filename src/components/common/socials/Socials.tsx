import { SocialsButton } from "./SocialsButton";

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
    <div className="flex justify-center pt-8">
      <SocialsButton name="facebook" />
      <SocialsButton name="google" />
      <SocialsButton name="apple" />
    </div>
  </div>
);

export default Socials;
