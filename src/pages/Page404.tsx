import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-96 text-center">
        <h1 className="text-7xl text-primary">Error 404</h1>
        <h2 className="mt-5 mb-3 text-4xl text-secondary">Page not found</h2>
        <span className="text-secondary">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </span>
        <Link to="" className="my-3 w-40 primary mx-auto">
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default Page404;
