import { type FunctionComponent, type ReactNode } from 'react'
import { StyledHtml, StyledPlacehodler } from './Html.styles'

interface HtmlProps {
  children?: ReactNode
}

const Html: FunctionComponent<HtmlProps> = () => {
  return (
    <StyledHtml>
      <StyledPlacehodler />
    </StyledHtml>
  )
}

export default Html
