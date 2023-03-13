import Placeholder from '@/components/Placeholder/Placeholder'
import styled from 'styled-components'

export const StyledAd = styled.div`
  min-height: 276px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const StyledAdTitle = styled.p`
  line-height: 1;
  text-align: end;
  flex: 0 0 auto;
  font-size: 14;
  margin-bottom: 5px;
`

export const StyledAdPlaceholder = styled(Placeholder)`
  flex: 1 1 auto;
`
