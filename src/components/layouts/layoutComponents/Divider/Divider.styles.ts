import styled, { css } from 'styled-components'
import { DirectionType } from './Divider'

export const StyledDivider = styled.div`
  ${({ direction }: { direction?: DirectionType }) => {
    switch (direction) {
      case 'vertical':
        return css`
          height: auto;
          width: 0;
          border-right: 2px solid black;
        `

      case 'horizontal':
      default:
        return css`
          height: 0px;
          width: auto;
          border-bottom: 2px solid black;
        `
    }
  }}
`
