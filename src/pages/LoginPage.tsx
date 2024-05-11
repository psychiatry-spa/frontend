import LoginForm from "../components/common/login-form/LoginForm";
import ClientLayout from "../layouts/client/ClientLayout";
import logo from "../assets/login-form.svg"
const LoginPage = () => {
  return (
    <ClientLayout>
      <div className="mt-10 flex-row w-full md:mx-auto md:flex md:w-max">
        <img className="mt-8 mx-auto w-[300px] md:ml-0 md:mr-5 md:w-[345px] lg:w-[520px]" src={logo} />
        <LoginForm />
      </div>
    </ClientLayout>
  );
};

export default LoginPage;
