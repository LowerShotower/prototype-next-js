import { type FunctionComponent, type ReactNode } from 'react'
import { StyledLayout } from './Layout.styles'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout
