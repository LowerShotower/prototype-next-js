import { type FunctionComponent, type ReactNode } from 'react'
import { StyledDivider } from './Divider.styles'

interface DividerProps {
  children?: ReactNode
  className?: string
  style?: object
}

const Divider: FunctionComponent<DividerProps> = ({ className, style }) => {
  return <StyledDivider className={className} style={style} />
}

export default Divider
