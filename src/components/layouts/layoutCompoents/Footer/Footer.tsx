import { type FunctionComponent, type ReactNode } from 'react'
import { StyledFooter } from './Footer.styles'

interface FooterProps {
  children?: ReactNode
  className?: string
}

const Footer: FunctionComponent<FooterProps> = ({ className, children }) => {
  return (
    <StyledFooter className={className}>{children} some footer</StyledFooter>
  )
}

export default Footer
