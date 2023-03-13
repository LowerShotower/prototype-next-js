import { type FunctionComponent, type ReactNode } from 'react'
import { StyledBody } from './Body.styles'

interface BodyProps {
  children?: ReactNode
  className?: string
}

const Body: FunctionComponent<BodyProps> = ({ className, children }) => {
  return <StyledBody className={className}>{children}</StyledBody>
}

export default Body
