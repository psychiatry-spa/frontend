import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

function LoginPage() {
  const responseMessage = (response: CredentialResponse) =>
    console.log(response);

  const errorMessage = () => console.log("error");

  return (
    <div className="h-screen w-full grid place-items-center bg-gray-900">
      <div className="p-60 bg-gray-800 rounded-md border-solid border-2 border-gray-700">
        <h1 className="font-bold text-white md:text-2xl pb-10">
          Sign in to your account
        </h1>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </div>
  );
}

export default LoginPage;
