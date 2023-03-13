import Body from '@/components/layouts/layoutComponents/Body/Body'
import Footer from '@/components/layouts/layoutComponents/Footer/Footer'
import Header from '@/components/layouts/layoutComponents/Header/Header'
import Wrapper from '@/components/layouts/layoutComponents/Wrapper/Wrapper'
import styled from 'styled-components'

export const StyledLayout = styled.div`
  height: inherit;
`

export const StyledWrapper = styled(Wrapper)`
  height: inherit;
  display: flex;
  flex-direction: column;
`

export const StyledBody = styled(Body)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`

export const StyledHeader = styled(Header)`
  flex: 0 0 auto;
`

export const StyledFooter = styled(Footer)`
  flex: 0 0 auto;
`
