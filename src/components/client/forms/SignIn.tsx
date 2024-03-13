import AuthGrid from "../../../layouts/client/AuthGrid";
import ForgotPassword from "./components/ForgotPassword";
import SignInForm from "./components/SignInForm";
import RememberMe from "./components/RememberMe";
import DontHaveAccount from "./components/DontHaveAccount";

const SignIn = () => {
  return (
    <AuthGrid>
      <SignInForm>
        <RememberMe />
        <ForgotPassword />
      </SignInForm>
      <DontHaveAccount />
    </AuthGrid>
  );
};

export default SignIn;
