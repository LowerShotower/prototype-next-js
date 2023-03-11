import Placeholder from '@/components/Placeholder/Placeholder'
import { type FunctionComponent, type ReactNode } from 'react'
import { StyledTeaser } from './Teaser.styles'

interface TeaserProps {
  children?: ReactNode
}

const Teaser: FunctionComponent<TeaserProps> = () => {
  return (
    <StyledTeaser>
      <Placeholder />
    </StyledTeaser>
  )
}

export default Teaser
