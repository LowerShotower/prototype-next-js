import Link from 'next/link'
import styled from 'styled-components'
import Content from '../Content/Content'

import Region from '../Region/Region'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const StyledLogo = styled.h2``

export const StyledNavigation = styled.nav`
  display: flex;
`

export const StyledExternalLinkWrapper = styled.div`
  flex: 1 0 294px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1000px) {
    display: none;
  }
`
export const StyledExternalLink = styled.a``

export const StyledLink = styled(Link)`
  margin-right: 14px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`

export const StyledMenu = styled.div``

export const StyledContent = styled(Content)``

export const StyledRegion = styled(Region)`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
