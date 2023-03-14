import styled from 'styled-components'
import { Columns } from './Row'

interface StyledRowAndRowItemProps {
  spacing?: number
  columns?: Columns
}

export const StyledRow = styled.div<StyledRowAndRowItemProps>`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 0 ${({ spacing }) => `-${spacing || 0}px`};
  row-gap: ${({ spacing }) => `${(spacing || 0) * 2}px`};
`

export const StyledRowItem = styled.div<StyledRowAndRowItemProps>`
  height: 100%;
  flex: 0 0 ${({ columns: { lg } = {} }) => `${100 / (lg || 1)}%`};
  padding: 0 ${({ spacing }) => `${spacing || 0}px`};
  @media (max-width: 1200px) {
    flex: 0 0 ${({ columns: { md, lg } = {} }) => `${100 / (md || lg || 1)}%`};
  }
  @media (max-width: 800px) {
    flex: 0 0
      ${({ columns: { sm, md, lg } = {} }) => `${100 / (sm || md || lg || 1)}%`};
  }

  @media (max-width: 600px) {
    flex: 0 0
      ${({ columns: { xs, sm, md, lg } = {} }) =>
        `${100 / (xs || sm || md || lg || 1)}%`};
  }
`
