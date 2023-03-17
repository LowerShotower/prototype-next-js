import { FunctionComponent } from 'react'
import {
  StyledContent,
  StyledExternalLink,
  StyledExternalLinkWrapper,
  StyledHeader,
  // StyledLink,
  // StyledLogo,
  StyledMenu,
  StyledNavigation,
  StyledRegion,
} from './Header.styles'
// import Image from 'next/image'
// import search from '@/public/assets/icons/search.svg'
// import person from '@/public/assets/icons/person.svg'
// import triangle from '@/public/assets/icons/triangle.svg'
import { components } from 'schema'
import { groupBy } from 'lodash'
import MainNavigation from '../MainNavigation/MainNavigation'
// import UserNavigation from '../UserNavigation/UserNavigation'
// import TopNavigation from '../TopNavigation/TopNavigation'
import Logo from '../Logo/Logo'
interface LayoutProps {
  className?: string
  data: components['schemas']['Header']
}

const Header: FunctionComponent<LayoutProps> = ({ className, data }) => {
  const { content } = data
  const { mainnavigation, topnavigation, usernavigation } = groupBy(
    content,
    //@ts-ignore
    ({ type }) => type
  )
  return (
    <StyledHeader className={className}>
      <StyledContent>
        <StyledRegion>
          <Logo />
          <StyledNavigation>
            {/* <TopNavigation data={topnavigation[0]} /> */}
            {/* <UserNavigation data={usernavigation[0]} /> */}
            {mainnavigation?.[0] && (
              <MainNavigation
                data={
                  mainnavigation[0] as components['schemas']['MainNavigation']
                }
              />
            )}
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
