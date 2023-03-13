import { SubsectionTypes } from './Subsection'
import styled, { css } from 'styled-components'

interface StyledSubsectionProps {
  type?: SubsectionTypes
}

export const StyledSubsection = styled.div<StyledSubsectionProps>`
  padding: 20px;
  ${({ type }) => {
    switch (type) {
      case 'paid':
        return css`
          border: 1px solid black;
          background-color: #f6f6f6;
        `
      default:
        return css``
    }
  }};
`

export const StyledHeaderTitle = styled.h4`
  text-align: center;
  margin-bottom: 10px;
`

export const StyledFooterTitle = styled.h4`
  text-align: center;
`
