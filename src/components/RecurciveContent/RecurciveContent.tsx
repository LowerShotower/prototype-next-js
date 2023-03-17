import { type FunctionComponent, type ReactNode } from 'react'
import { StyledRecurciveContent } from './RecurciveContent.styles'

interface RecurciveContentProps {
  children?: ReactNode
  className?: string
  style?: object
  content?: object
}

const RecurciveContent: FunctionComponent<RecurciveContentProps> = ({
  className,
  children,
  style,
  content,
}) => {
  return (
    <StyledRecurciveContent className={className} style={style}>
      {children}
    </StyledRecurciveContent>
  )
}

export default RecurciveContent
