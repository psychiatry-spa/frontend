import Icon from "../../common/icon";

interface Props {
  text: string;
  iconName: string;
}

export const SidebarButton = ({ text, iconName }: Props) => {
  return (
    <a
      href=""
      className="p-1 m-2 mx-3 flex items-center 
      text-primary-800 rounded-lg hover:bg-primary-005 hover:text-primary 
      dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <Icon name={iconName} styles="m-1 mr-3 size-6" />
      <span className="text-[1.1rem] text-primary dark:text-gray-200">
        {text}
      </span>
    </a>
  );
};
