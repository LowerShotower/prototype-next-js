import { type FunctionComponent, type ReactNode } from 'react'
import { StyledIconButton } from './IconButton.styles'

interface IconButtonProps {
  children?: ReactNode
  className?: string
  // icon:
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  className,
  children,
  // icon,
}) => {
  // const Icon = useMemo(() => icon, [icon])

  return <StyledIconButton className={className}>{children}</StyledIconButton>
}

export default IconButton
