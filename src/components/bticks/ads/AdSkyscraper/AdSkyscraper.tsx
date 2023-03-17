import { type FunctionComponent, type ReactNode } from 'react'
import { StyledAdSkyscraper, StyledPlaceholder } from './AdSkyscraper.styles'

interface AdSkyscraperProps {
  children?: ReactNode
  className?: string
}

const AdSkyscraper: FunctionComponent<AdSkyscraperProps> = ({ className }) => {
  return (
    <StyledAdSkyscraper className={className}>
      <StyledPlaceholder text="Ad" />
    </StyledAdSkyscraper>
  )
}

export default AdSkyscraper
