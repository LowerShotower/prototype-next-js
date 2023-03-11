import { type FunctionComponent, type ReactNode } from 'react'
import { StyledHtml } from './Html.styles'

interface HtmlProps {
  children?: ReactNode
}

const Html: FunctionComponent<HtmlProps> = ({ children }) => {
  return <StyledHtml>{children}</StyledHtml>
}

export default Html
