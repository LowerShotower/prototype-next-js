import { FunctionComponent, ReactNode } from 'react'
import { StyledWrapper } from './Wrapper.styles'

interface Props {
  children?: ReactNode
  className?: string
}
const Wrapper: FunctionComponent<Props> = ({ className, children }) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>
}

export default Wrapper
