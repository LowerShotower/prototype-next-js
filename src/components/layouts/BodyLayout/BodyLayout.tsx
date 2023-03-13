import { type FunctionComponent, type ReactNode } from 'react'

interface BodyLayoutProps {
  children?: ReactNode
}

const BodyLayout: FunctionComponent<BodyLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export default BodyLayout
