import Divider from '@/components/layouts/layoutComponents/Divider/Divider'
import styled from 'styled-components'

export const StyledNewTickerRow = styled.div`
  display: flex;
`
export const StyledTimePart = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  margin-right: 20px;
`

export const StyledTime = styled.p`
  flex: 0 0 auto;
`

export const StyledLine = styled(Divider)`
  flex: 1 1 auto;
`

export const StyledContentPart = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
`

export const StyledTitle = styled.p`
  flex: 0 0 auto;
  margin-bottom: 10px;
`

export const StyledText = styled.p`
  flex: 1 1 auto;
`
