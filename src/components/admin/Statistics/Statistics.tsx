import { useState } from "react";
import MenuButton from "../../common/buttons/MenuButton";
import Container from "../../../layouts/admin/Container";
import StatisticsItem from "../statistics/StatisticsItem";

const Statistics = () => {
  const [isActive, setActive] = useState(true);

  const active = [
    "text-accent",
    "dark:text-blue-500",
    "hover:text-accent-focus",
    "dark:hover:text-blue-400",
  ];

  const regular = [
    "text-primary",
    "hover:text-primary-focus",
    "dark:text-gray-300",
    "dark:hover:text-white",
  ];

  const handleCustomersTab = () => setActive(true);
  const handleBlogsButton = () => setActive(false);

  const mockData = {
    name: "John Doe",
    percentage: "12,5",
    data: "321",
  };

  const mockData2 = {
    name: "Isomnia",
    percentage: "23",
    data: "2235",
  };

  return (
    <Container styles="col-span-3 xl:col-span-1">
      <div className="flex items-center mb-3">
        <h2 className="text-xl font-semibold text-primary dark:text-white">
          Statistics this month
        </h2>
        {/* <Icon
          name="help"
          styles="size-4 text-gray-500 ml-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        /> */}
      </div>
      <div className="flex text-sm font-medium text-center cursor-pointer">
        <button
          type="button"
          id="customersButton"
          className={`p-4 w-full border-b border-r 
          border-primary-200 bg-primary-005 hover:bg-primary-100 active:bg-primary-200
          dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600
          ${isActive ? active.join(" ") : regular.join(" ")}`}
          onClick={handleCustomersTab}
        >
          Top Customers
        </button>
        <button
          type="button"
          id="blogsButton"
          className={`p-4 w-full border-b border-l 
          border-primary-200 bg-primary-005 hover:bg-primary-100 active:bg-primary-200
          dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600
          ${isActive ? regular.join(" ") : active.join(" ")}`}
          onClick={handleBlogsButton}
        >
          Top Blogs
        </button>
      </div>

      <ul id="topCustomers" className={`py-4 ${isActive ? "" : "hidden"}`}>
        {[mockData, mockData, mockData, mockData, mockData].map((data, id) => (
          <StatisticsItem
            key={id}
            name={data.name}
            percentage={data.percentage}
            data={data.data}
          />
        ))}
      </ul>

      <ul id="topBlogs" className={`py-4 ${isActive ? "hidden" : ""}`}>
        {[mockData2, mockData2, mockData2, mockData2, mockData2].map(
          (data, id) => (
            <StatisticsItem
              key={id}
              name={data.name}
              percentage={data.percentage}
              data={data.data}
            />
          )
        )}
      </ul>

      <div className="mt-1 flex justify-between">
        <MenuButton
          options={[
            "Last 7 days",
            "Last 30 days",
            "Last 90 days",
            "Last 180 days",
          ]}
        />

        <button className="flex items-center font-medium text-accent hover:text-accent-focus dark:text-blue-500 dark:hover:text-white">
          Full Report
          {/* <Icon name="search" styles="ml-2 size-4" /> */}
        </button>
      </div>
    </Container>
  );
};

export default Statistics;
