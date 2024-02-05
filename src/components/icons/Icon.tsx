import { IconName, icons } from "./types"

type IconProps = {
  name: IconName
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const SvgIcon = icons[name]

  return <SvgIcon />
}

export default Icon
