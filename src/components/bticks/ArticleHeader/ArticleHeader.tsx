import { type FunctionComponent, type ReactNode } from 'react'
import { StyledArticleHeader } from './ArticleHeader.styles'

interface ArticleHeaderProps {
  children?: ReactNode
  className?: string
  style?: object
}

const ArticleHeader: FunctionComponent<ArticleHeaderProps> = ({
  className,
  children,
  style,
}) => {
  return (
    <StyledArticleHeader className={className} style={style}>
      {children}
    </StyledArticleHeader>
  )
}

export default ArticleHeader
