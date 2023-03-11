import { type FunctionComponent, type ReactNode } from 'react'
import { StyledAdBillboard } from './AdBillboard.styles'

interface AdBillboardProps {
  children?: ReactNode
}

const AdBillboard: FunctionComponent<AdBillboardProps> = ({ children }) => {
  return <StyledAdBillboard>{children}</StyledAdBillboard>
}

export default AdBillboard
