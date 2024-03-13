import AuthGrid from "../../../layouts/client/AuthGrid";
import ForgotPassword from "./components/ForgotPassword";
import SignUpForm from "./components/SignUpForm";
import RememberMe from "./components/RememberMe";

const SignUp = () => {
  return (
    <AuthGrid>
      <SignUpForm>
        <RememberMe />
        <ForgotPassword />
      </SignUpForm>
    </AuthGrid>
  );
};

export default SignUp;
