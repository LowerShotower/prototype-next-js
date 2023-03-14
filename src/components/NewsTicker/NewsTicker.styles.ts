import styled from 'styled-components'

export const StyledNewsTicker = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
`

export const StyledNewsTickerHeader = styled.h2`
  margin-bottom: 20px;
`

export const StyledNewsTickerList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  overflow-y: auto;
  max-height: 500px;
  & > * {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const StyledNewsTickerButtons = styled.div`
  display: flex;
  margin-left: 56px;
  margin-top: 20px;
`

export const StyledNewsStickerButton = styled.button`
  border: none;
  background: transparent;
`
