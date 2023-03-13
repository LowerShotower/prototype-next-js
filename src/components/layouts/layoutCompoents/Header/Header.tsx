import { FunctionComponent } from 'react'
import {
  StyledContent,
  StyledExternalLink,
  StyledExternalLinkWrapper,
  StyledHeader,
  StyledLink,
  StyledLogo,
  StyledMenu,
  StyledNavigation,
  StyledRegion,
} from './Header.styles'
import Image from 'next/image'
import search from '@/public/assets/icons/search.svg'
import person from '@/public/assets/icons/person.svg'
import triangle from '@/public/assets/icons/triangle.svg'
interface LayoutProps {
  className?: string
}

const Header: FunctionComponent<LayoutProps> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <StyledContent>
        <StyledRegion>
          <StyledLogo>
            <StyledLink href="/">Schwarzwälder Bote</StyledLink>
          </StyledLogo>
          <StyledNavigation>
            <StyledLink href="">
              <Image src={search} alt="search" />
            </StyledLink>
            <StyledLink href="">
              <Image src={person} alt="person" />
            </StyledLink>
            <StyledLink href="">
              <Image src={triangle} alt="triangle" />
            </StyledLink>
            <StyledLink href="ressort">Mein SB</StyledLink>
            <StyledLink href="article">Abo</StyledLink>
            <StyledMenu>Menu</StyledMenu>
          </StyledNavigation>
        </StyledRegion>
      </StyledContent>
      <StyledExternalLinkWrapper>
        <StyledExternalLink>MHS Digital</StyledExternalLink>
      </StyledExternalLinkWrapper>
    </StyledHeader>
  )
}

export default Header
