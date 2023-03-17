import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
import { StyledTopNavigation } from './TopNavigation.styles'

interface TopNavigationProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['TopNavigation']
}

const TopNavigation: FunctionComponent<TopNavigationProps> = ({
  className,
  children,
  style,
}) => {
  return (
    <StyledTopNavigation className={className} style={style}>
      {children}
    </StyledTopNavigation>
  )
}

export default TopNavigation
