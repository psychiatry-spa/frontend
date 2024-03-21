import { useState } from "react";
import Icon from "../../common/icon";
import Container from "../../../layouts/admin/Container";
import StatisticsItem from "../statistics/StatisticsItem";

const Statistics = () => {
  const [isActive, setActive] = useState(true);

  const active = [
    "text-blue-700",
    "dark:text-blue-500",
    "hover:text-blue-800",
    "dark:hover:text-blue-400",
  ];

  const regular = [
    "text-gray-600",
    "hover:text-gray-900",
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
    <Container>
      <div className="flex items-center mb-3">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Statistics this month
        </span>
        <Icon
          name="help"
          styles="size-4 text-gray-500 ml-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        />
      </div>
      <div className="flex text-sm font-medium text-center cursor-pointer">
        <button
          type="button"
          id="customersButton"
          className={`p-4 w-full border-b border-r rounded-tl-lg border-gray-200 dark:border-gray-800
          bg-gray-50 hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600
          ${isActive ? active.join(" ") : regular.join(" ")}`}
          onClick={handleCustomersTab}
        >
          Top Customers
        </button>
        <button
          type="button"
          id="blogsButton"
          className={`p-4 w-full border-b border-l rounded-tr-lg border-gray-200 dark:border-gray-800
          bg-gray-50 hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600
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

      <div className="mt-2 flex justify-between">
        <button className="flex items-center font-medium text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          Last 7 days
          <Icon name="search" styles="ml-2 size-4" />
        </button>

        <button className="flex items-center font-medium text-sm text-blue-700 hover:text-gray-900 dark:text-blue-500 dark:hover:text-white">
          Full Report
          <Icon name="search" styles="ml-2 size-4" />
        </button>
      </div>
    </Container>
  );
};

export default Statistics;
