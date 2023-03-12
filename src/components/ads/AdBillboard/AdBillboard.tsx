import Region from '@/components/layouts/layoutCompoents/Region/Region'
import Section from '@/components/layouts/layoutCompoents/Section/Section'
import { type FunctionComponent, type ReactNode } from 'react'
import { StyledAdBillboard, StyledPlacehodler } from './AdBillboard.styles'

interface AdBillboardProps {
  children?: ReactNode
}

const AdBillboard: FunctionComponent<AdBillboardProps> = () => {
  return (
    <StyledAdBillboard>
      <Section>
        <Region>
          <StyledPlacehodler />
        </Region>
      </Section>
    </StyledAdBillboard>
  )
}

export default AdBillboard
