import { useState, useEffect } from "react";
import { Icon } from "../../common/icon";
import Container from "../container";

export const Statistics = () => {
  const [sidebar, setSidebar] = useState("");
  const sidebarElem = document.getElementById("sidebar");

  useEffect(() => {
    if (sidebar === "hidden") sidebarElem?.classList.remove("hidden");
    else sidebarElem?.classList.add("hidden");
  }, [sidebar]);

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
      <ul className="flex text-sm font-medium text-center text-gray-500 cursor-pointer">
        <li className="p-4 w-full border-b border-r rounded-tl-lg border-gray-200 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-50 hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          Top Customers
        </li>
        <li className="p-4 w-full border-b border-l rounded-tr-lg border-gray-200 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-50 hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          Top Blogs
        </li>
      </ul>

      <ul id="top-customers" className="py-4 ">
        <li className="flex py-4 border-b border-gray-200 dark:border-gray-700 justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                John Doe
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400 font-medium">
                  12.5%
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400 ">
                  vs last month
                </span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            $445,467
          </span>
        </li>

        <li className="flex py-4 border-b border-gray-200 dark:border-gray-700 justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                John Doe
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400">
                  12.5%
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  vs last month
                </span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            $445,467
          </span>
        </li>

        <li className="flex py-4 border-b border-gray-200 dark:border-gray-700 justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                John Doe
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400">
                  12.5%
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  vs last month
                </span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            $445,467
          </span>
        </li>

        <li className="flex py-4 border-b border-gray-200 dark:border-gray-700 justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                John Doe
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400">
                  12.5%
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  vs last month
                </span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            $445,467
          </span>
        </li>
      </ul>

      <ul id="top-blogs" className="pt-4 hidden">
        <li className="flex py-4 border-b justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                Insomnia
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400">22%</span>
                <span className="ml-2 text-gray-500">vs last month</span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold">
            457 views
          </span>
        </li>

        <li className="flex py-4 border-b justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                Insomnia
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400">22%</span>
                <span className="ml-2 text-gray-500">vs last month</span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold">
            457 views
          </span>
        </li>

        <li className="flex py-4 border-b justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                Insomnia
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400">22%</span>
                <span className="ml-2 text-gray-500">vs last month</span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold">
            457 views
          </span>
        </li>

        <li className="flex py-4 border-b justify-between">
          <div className="flex">
            <Icon name="lock" styles="size-10" />
            <div className="pl-4">
              <span className="font-semibold text-gray-900 dark:text-white">
                Insomnia
              </span>
              <div className="flex items-center text-sm">
                <Icon
                  name="pie-chart"
                  styles="size-4 text-green-600 dark:text-green-400"
                />
                <span className="text-green-600 dark:text-green-400">22%</span>
                <span className="ml-2 text-gray-500">vs last month</span>
              </div>
            </div>
          </div>
          <span className="flex items-center text-lg font-semibold">
            457 views
          </span>
        </li>
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

      <div></div>
    </Container>
  );
};
