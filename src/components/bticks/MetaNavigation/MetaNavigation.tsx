import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
import { StyledMetaNavigation } from './MetaNavigation.styles'

interface MetaNavigationProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['MetaNavigation']
}

const MetaNavigation: FunctionComponent<MetaNavigationProps> = ({
  className,
  children,
  style,
}) => {
  return (
    <StyledMetaNavigation className={className} style={style}>
      {children}
    </StyledMetaNavigation>
  )
}

export default MetaNavigation
