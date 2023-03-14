import { type FunctionComponent, type ReactNode } from 'react'
import { StyledDivider } from './Divider.styles'

export type DirectionType = 'vertical' | 'horizontal'
interface DividerProps {
  children?: ReactNode
  className?: string
  style?: object
  direction?: DirectionType
}

const Divider: FunctionComponent<DividerProps> = ({
  className,
  style,
  direction,
}) => {
  return (
    <StyledDivider direction={direction} className={className} style={style} />
  )
}

export default Divider
