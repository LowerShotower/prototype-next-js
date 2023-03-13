import { type FunctionComponent, type ReactNode } from 'react'
import {
  StyledFooterTitle,
  StyledHeaderTitle,
  StyledSubsection,
} from './Subsection.styles'

enum Subsections {
  paid = 'paid',
}

export type SubsectionTypes =
  `${(typeof Subsections)[keyof typeof Subsections]}`

interface SubsectionProps {
  children?: ReactNode
  className?: string
  type?: SubsectionTypes
  headerTitle?: string
  footerTitle?: string
}

const Subsection: FunctionComponent<SubsectionProps> = ({
  className,
  children,
  type,
  headerTitle,
  footerTitle,
}) => {
  return (
    <StyledSubsection className={className} type={type}>
      <StyledHeaderTitle>{headerTitle}</StyledHeaderTitle>
      {children}
      <StyledFooterTitle>{footerTitle}</StyledFooterTitle>
    </StyledSubsection>
  )
}

export default Subsection
