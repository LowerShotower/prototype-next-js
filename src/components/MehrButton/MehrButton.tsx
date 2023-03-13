import { type FunctionComponent, type ReactNode } from 'react'
import { StyledMehrButton, StyledMehrWrapper } from './MehrButton.styles'

interface MehrButtonProps {
  children?: ReactNode
  className?: string
}

const MehrButton: FunctionComponent<MehrButtonProps> = ({
  className,
  children,
}) => {
  return (
    <StyledMehrWrapper>
      <StyledMehrButton className={className}>{children}</StyledMehrButton>
    </StyledMehrWrapper>
  )
}

export default MehrButton
