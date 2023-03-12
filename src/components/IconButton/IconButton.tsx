import { useMemo, type FunctionComponent, type ReactNode } from 'react'
import { StyledIconButton } from './IconButton.styles'

interface IconButtonProps {
  children?: ReactNode
  className?: string
  icon: FunctionComponent<unknown>
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  className,
  icon,
}) => {
  const Icon = useMemo(() => icon, [icon])

  return (
    <StyledIconButton className={className}>
      <Icon />
    </StyledIconButton>
  )
}

export default IconButton
