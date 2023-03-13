import Placeholder from '@/components/Placeholder/Placeholder'
import styled from 'styled-components'

export const StyledAdSkyscraper = styled.div`
  flex: 0 0 auto;
  padding: 0 0 0 10px;
  @media (max-width: 800px) {
    display: none;
  }
`

export const StyledPlaceholder = styled(Placeholder)`
  min-height: 610px;
  @media (max-width: 800px) {
    min-height: 200px;
  }
`
