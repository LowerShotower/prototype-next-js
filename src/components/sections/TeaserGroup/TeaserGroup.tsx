import { type FunctionComponent, type ReactNode } from 'react'
import { StyledTeaserGroup } from './TeaserGroup.styles'

interface TeaserGroupProps {
  children?: ReactNode
}

const TeaserGroup: FunctionComponent<TeaserGroupProps> = ({ children }) => {
  return <StyledTeaserGroup>{children}</StyledTeaserGroup>
}

export default TeaserGroup
