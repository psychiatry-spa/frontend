import RegisterForm from "../components/common/register-form/RegisterForm";
import ClientLayout from "../layouts/client/ClientLayout";
import logo from "../assets/login-form.svg";
const SignUpPage = () => {
  return (
    <ClientLayout>
      <div className="mt-10 flex-row w-full md:mx-auto md:flex md:w-max">
        <img
          className="md:mt-24 lg:mt-8 mb-auto mx-auto w-[300px] md:ml-0 md:mr-5 md:w-[345px] lg:w-[520px]"
          src={logo}
        />
        <RegisterForm />
      </div>
    </ClientLayout>
  );
};

export default SignUpPage;
