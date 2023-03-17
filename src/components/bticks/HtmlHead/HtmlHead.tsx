import { type FunctionComponent, type ReactNode } from 'react'
import { StyledHtmlHead } from './HtmlHead.styles'

interface HtmlHeadProps {
  children?: ReactNode
  className?: string
  style?: object
  text?: string
}

const HtmlHead: FunctionComponent<HtmlHeadProps> = ({
  className,
  style,
  text,
}) => {
  return text ? (
    <StyledHtmlHead className={className} style={style}>
      {text || ''}
    </StyledHtmlHead>
  ) : null
}

export default HtmlHead
