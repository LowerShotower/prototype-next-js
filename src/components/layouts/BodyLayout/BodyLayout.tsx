import AdBillboard from '@/components/ads/AdBillboard/AdBillboard'
import { type FunctionComponent, type ReactNode } from 'react'
import {
  StyledAdSkyscraper,
  StyledBodyLayout,
  StyledContent,
  StyledMainContent,
} from './BodyLayout.styles'

interface BodyLayoutProps {
  children?: ReactNode
}

const BodyLayout: FunctionComponent<BodyLayoutProps> = ({ children }) => {
  return (
    <StyledBodyLayout>
      <StyledMainContent>
        <AdBillboard />
        <StyledContent>{children}</StyledContent>
      </StyledMainContent>
      <StyledAdSkyscraper />
    </StyledBodyLayout>
  )
}

export default BodyLayout
