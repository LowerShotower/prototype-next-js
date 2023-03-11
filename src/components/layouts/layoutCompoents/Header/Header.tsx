import { FunctionComponent } from 'react'
import {
  StyledContent,
  StyledExternalLink,
  StyledHeader,
  StyledLink,
  StyledLogo,
  StyledMenu,
  StyledNavigation,
} from './Header.styles'

interface LayoutProps {
  className?: string
}

const Header: FunctionComponent<LayoutProps> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <StyledContent>
        <StyledLogo>Schwarzwälder Bote</StyledLogo>
        <StyledNavigation>
          <StyledLink href="">Search</StyledLink>
          <StyledLink href="">Link</StyledLink>
          <StyledLink href="">Link</StyledLink>
          <StyledLink href="">Mein SB</StyledLink>
          <StyledLink href="">Abo</StyledLink>
          <StyledMenu>Menu</StyledMenu>
        </StyledNavigation>
      </StyledContent>
      <StyledExternalLink>MHS Digital</StyledExternalLink>
    </StyledHeader>
  )
}

export default Header
