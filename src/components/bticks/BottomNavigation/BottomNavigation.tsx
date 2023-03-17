import { type FunctionComponent, type ReactNode } from 'react'
import { StyledBottomNavigation } from './BottomNavigation.styles'

interface BottomNavigationProps {
  children?: ReactNode
  className?: string
  style?: object
}

const BottomNavigation: FunctionComponent<BottomNavigationProps> = ({ className, children, style }) => {
  return <StyledBottomNavigation className={className} style={style}>{children}</StyledBottomNavigation>
}

export default BottomNavigation
