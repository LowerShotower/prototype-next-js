import Body from '@/components/layouts/layoutCompoents/Body/Body'
import Footer from '@/components/layouts/layoutCompoents/Footer/Footer'
import Header from '@/components/layouts/layoutCompoents/Header/Header'
import Wrapper from '@/components/layouts/layoutCompoents/Wrapper/Wrapper'
import { type FunctionComponent, type ReactNode } from 'react'
import {
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledWrapper,
} from './Layout.styles'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledWrapper>
        <StyledHeader />
        <StyledBody>{children}</StyledBody>
        <StyledFooter />
      </StyledWrapper>
    </StyledLayout>
  )
}

export default Layout
