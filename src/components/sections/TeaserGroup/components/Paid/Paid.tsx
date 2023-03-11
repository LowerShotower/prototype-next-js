import { type FunctionComponent, type ReactNode } from 'react'
import { StyledPaid } from './Paid.styles'

interface PaidProps {
  children?: ReactNode
}

const Paid: FunctionComponent<PaidProps> = ({ children }) => {
  return <StyledPaid>{children}</StyledPaid>
}

export default Paid
