import AdSkyscraper from '@/components/bticks/ads/AdSkyscraper/AdSkyscraper'
import Content from '@/components/layouts/layoutComponents/Content/Content'
import styled from 'styled-components'

export const StyledBodyLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
`

export const StyledContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const StyledMainContent = styled(Content).attrs({
  direction: 'column',
})`
  flex: 1 1 auto;
`

export const StyledAdSkyscraper = styled(AdSkyscraper)`
  display: flex;
  flex: 1 0 294px;
  @media (max-width: 1000px) {
    display: none;
  }
`
