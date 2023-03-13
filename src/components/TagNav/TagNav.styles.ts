import styled from 'styled-components'

export const StyledTagNav = styled.nav`
  display: flex;
  * {
    margin-right: 50px;
    &:last-child {
      margin-right: 0px;
    }
    @media (max-width: 800px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
