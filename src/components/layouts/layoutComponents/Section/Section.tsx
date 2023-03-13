import { type FunctionComponent, type ReactNode } from 'react'
import { StyledSection, StyledSectionTitle } from './Section.styles'
import Region from '@/components/layouts/layoutComponents/Region/Region'
interface SectionProps {
  children?: ReactNode
  className?: string
  title?: string
  fullWidth?: boolean
}

const Section: FunctionComponent<SectionProps> = ({
  className,
  children,
  title,
  fullWidth,
}) => {
  return (
    <StyledSection className={className}>
      {fullWidth ? (
        <>
          {title && <StyledSectionTitle>{title}</StyledSectionTitle>}
          {children}
        </>
      ) : (
        <Region>
          {title && <StyledSectionTitle>{title}</StyledSectionTitle>}
          {children}
        </Region>
      )}
    </StyledSection>
  )
}

export default Section
