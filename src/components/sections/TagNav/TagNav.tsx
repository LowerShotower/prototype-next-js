import { type FunctionComponent, type ReactNode } from 'react'
import { StyledTagNav } from './TagNav.styles'

interface TagNavProps {
  children?: ReactNode
}

const TagNav: FunctionComponent<TagNavProps> = ({ children }) => {
  return <StyledTagNav>{children}</StyledTagNav>
}

export default TagNav
