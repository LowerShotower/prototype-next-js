import { type FunctionComponent, type ReactNode } from 'react'
import { StyledLink } from '../Header/Header.styles'
import { StyledLogo } from './Logo.styles'

interface LogoProps {
  children?: ReactNode
  className?: string
  style?: object
}

const Logo: FunctionComponent<LogoProps> = ({ className, style }) => {
  return (
    <StyledLogo className={className} style={style}>
      <StyledLogo>
        <StyledLink href="/">Schwarzwälder Bote</StyledLink>
      </StyledLogo>
    </StyledLogo>
  )
}

export default Logo
