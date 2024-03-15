import Button from "../../../common/buttons/Button";
import { Link } from "react-router-dom";

const DontHaveAccount = () => {
  return (
    <div className="px-8 py-10 rounded-3xl inline-block border w-full bg-white">
      <div className="text-teal font-semibold text-2xl text-center">
        Don't have an account?
      </div>
      <Link to="" className="mt-10">
        <Button bgColor="secondary">Sign up</Button>
      </Link>
    </div>
  );
};

export default DontHaveAccount;
