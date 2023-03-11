import { FunctionComponent, ReactNode } from 'react'
import { StyledContent } from './Content.styles'

interface Props {
  children?: ReactNode
  className?: string
  direction?: 'row' | 'column'
}
const Content: FunctionComponent<Props> = ({
  direction = 'row',
  children,
  ...otherProps
}) => {
  return (
    <StyledContent direction={direction} {...otherProps}>
      {children}
    </StyledContent>
  )
}

export default Content
