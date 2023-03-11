import { type FunctionComponent, type ReactNode } from 'react'
import { StyledGroup } from './Group.styles'

interface GroupProps {
  children?: ReactNode
}

const Group: FunctionComponent<GroupProps> = ({ children }) => {
  return <StyledGroup>{children}</StyledGroup>
}

export default Group
