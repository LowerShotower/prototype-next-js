import Section from '@/components/layouts/layoutComponents/Section/Section'
import { type FunctionComponent, type ReactNode } from 'react'
import { StyledAdBillboard, StyledPlacehodler } from './AdBillboard.styles'

interface AdBillboardProps {
  children?: ReactNode
}

const AdBillboard: FunctionComponent<AdBillboardProps> = () => {
  return (
    <StyledAdBillboard>
      <Section>
        <StyledPlacehodler text="Ad" />
      </Section>
    </StyledAdBillboard>
  )
}

export default AdBillboard
