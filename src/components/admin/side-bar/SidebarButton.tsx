import Icon from "../../common/icon/icon";

interface Props {
  text: string;
  iconName: string;
}

export const SidebarButton = ({ text, iconName }: Props) => {
  return (
    <a
      href=""
      className="p-1 m-2 flex items-center text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <Icon name={iconName} styles="m-1 mr-3 size-6" />
      <span className="text-[1.1rem] text-gray-900 dark:text-gray-200">
        {text}
      </span>
    </a>
  );
};
