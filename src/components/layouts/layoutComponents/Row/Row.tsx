import {
  Children,
  cloneElement,
  ReactElement,
  type FunctionComponent,
} from 'react'
import { StyledRow, StyledRowItem } from './Row.styles'

export interface Columns {
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

interface RowProps {
  children: ReactElement<RowItemProps>[]
  className?: string
  columns?: Columns
  spacing?: number
}

interface RowItemProps {
  children?: ReactElement
  className?: string
  columns?: Columns
  spacing?: number
}

const Row: FunctionComponent<RowProps> & {
  Item: FunctionComponent<RowItemProps>
} = ({ className, children, columns, spacing }) => {
  return (
    <StyledRow spacing={spacing} className={className}>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          spacing,
          columns: child?.props?.columns || columns,
        })
      })}
    </StyledRow>
  )
}

const RowItem: FunctionComponent<RowItemProps> = ({
  className,
  children,
  spacing,
  columns,
}) => {
  return (
    <StyledRowItem className={className} spacing={spacing} columns={columns}>
      {children}
    </StyledRowItem>
  )
}

Row.Item = RowItem

export default Row
