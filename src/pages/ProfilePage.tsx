import "./ProfilePage.css";
import TextEditor from "../components/TextEditor";

function ProfilePage() {
  return (
    <>
      <ul className="font-medium flex justify-center p-4 border border-gray-100 bg-gray-50 text-gray-900">
        <li>
          <a className="px-7 hover:text-blue-500" href="#calendar">
            Home
          </a>
        </li>
        <li>
          <a className="px-7 hover:text-blue-500" href="#blog">
            Blog
          </a>
        </li>
        <li>
          <a className="px-7 hover:text-blue-500" href="#calendar">
            Calendar
          </a>
        </li>
      </ul>

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              Blogs
            </h2>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Create blog
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Download blog
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Publish blog
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Delete blog
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Preview blog
            </button>
            <TextEditor></TextEditor>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              Calendar for Consultations
            </h2>

          </div>
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
