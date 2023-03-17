import { type FunctionComponent, type ReactNode } from 'react'
import { StyledAd, StyledAdPlaceholder, StyledAdTitle } from './Ad.styles'

interface AdProps {
  children?: ReactNode
  className?: string
  title?: string
}

const Ad: FunctionComponent<AdProps> = ({ className, title }) => {
  return (
    <StyledAd className={className}>
      {title && <StyledAdTitle>{title}</StyledAdTitle>}
      <StyledAdPlaceholder text="Ad" />
    </StyledAd>
  )
}

export default Ad
