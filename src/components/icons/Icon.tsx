import icons from "./types"

type IconProps = {
  name: keyof typeof icons
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const SvgIcon = icons[name]

  return (
    <div>
      <SvgIcon />
    </div>
  )
}

export default Icon
