import styled from 'styled-components'

export const StyledSocialBar = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const StyledLeftGroup = styled.div`
  flex: 1 1 auto;
  display: flex;

  & * {
    margin-right: 10px;
    *:last-child {
      margin-right: 0;
    }
  }
`
export const StyledRightGroup = styled.div`
  flex: 0 0 auto;
`
