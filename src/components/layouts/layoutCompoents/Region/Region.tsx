import { type FunctionComponent, type ReactNode } from 'react'
import { StyledRegion } from './Region.styles'

interface RegionProps {
  children?: ReactNode
  className?: string
}

const Region: FunctionComponent<RegionProps> = ({ className, children }) => {
  return <StyledRegion className={className}>{children}</StyledRegion>
}

export default Region
