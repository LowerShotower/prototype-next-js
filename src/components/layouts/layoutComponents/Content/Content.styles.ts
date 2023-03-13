import styled from 'styled-components'

export const StyledContent = styled.div<{ direction: 'row' | 'column' }>`
  max-width: 986px;
  display: flex;
  align-items: stretch;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
`
