import { EnumTypes, TeaserTypes } from './Teaser'
import Placeholder from '@/components/Placeholder/Placeholder'
import styled, { css } from 'styled-components'
import Flag from '@/components/Flag/Flag'

export const StyledTeaser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  height: ${({ enm }: { enm?: EnumTypes }) =>
    enm === 'top' ? '389px' : 'auto'};
`
// export const StyledTeaserBody = styled.div``
export const StyledTeaserImage = styled(Placeholder)`
  flex: 0 0 auto;
  ${({ enm }: { enm: EnumTypes }) => {
    switch (enm) {
      case 'standard':
      default:
        return css`
          position: relative;
        `
      case 'top':
        return css`
          position: absolute;
          inset: 0 0;
        `
    }
  }};
  height: ${({
    enm,
    paidContent,
  }: {
    enm: EnumTypes
    paidContent: boolean
  }) => {
    switch (enm) {
      case 'standard':
      default:
        return paidContent ? '240px' : '154px'
      case 'top':
        return 'auto'
    }
  }};
`
export const StyledTeaserDescription = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: ${({ enm }: { enm?: EnumTypes }) =>
    enm === 'top' ? 'flex-end' : 'flex-start'};
  padding: 15px 10px 20px;
  z-index: 0;
`
export const StyledTeaserTitle = styled.h4``
export const StyledTeaserText = styled.p``
export const StyledTeaserFlag = styled(Flag)`
  position: absolute;
  ${({ type }: { type: TeaserTypes }) => {
    switch (type) {
      case 'common':
      default:
        return css`
          bottom: 0;
          right: 0;
        `
      case 'paid':
        return css`
          bottom: 0;
          left: 0;
        `
    }
  }}
`
