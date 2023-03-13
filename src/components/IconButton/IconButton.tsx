import { type FunctionComponent, type ReactNode } from 'react'
import { StyledIconButton } from './IconButton.styles'

interface IconButtonProps {
  children?: ReactNode
  className?: string
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  className,
  children,
}) => {
  return <StyledIconButton className={className}>{children}</StyledIconButton>
}

export default IconButton
