import { EnumTypes, TeaserTypes } from './Teaser'
import styled, { css } from 'styled-components'
import Flag from '@/components/Flag/Flag'

export const StyledTeaser = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  height: ${({ enm }: { enm?: EnumTypes }) => {
    switch (enm) {
      case 'top':
        return '389px'
      case 'compact':
        return '219px'
      case 'standard':
      default:
        return 'auto'
    }
  }};
`
// export const StyledTeaserBody = styled.div``
export const StyledTeaserImage = styled.image`
  flex: 0 0 auto;
  background-image: url(${(props: {
    src: string
    enm: EnumTypes
    paidContent: boolean
  }) => props.src || ''});
  ${({ enm }: { enm: EnumTypes }) => {
    switch (enm) {
      case 'standard':
      default:
        return css`
          position: relative;
        `
      case 'top':
      case 'compact':
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
      case 'compact':
        return 'auto'
    }
  }};
`
export const StyledTeaserDescription = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: ${({ enm }: { enm?: EnumTypes }) => {
    switch (enm) {
      case 'top':
      case 'compact':
        return 'flex-end'
      case 'standard':
      default:
        return 'flex-start'
    }
  }};
  padding: 15px 0 20px;
  z-index: 0;
`
export const StyledTeaserTitle = styled.p`
  font-family: 'Open Sans';
  font-size: 14px;
`
export const StyledTeaserText = styled.p`
  font-family: 'Open Sans';
  line-height: 1.6;
  font-size: 18px;
`

export const StyledTeaserFlag = styled(Flag)`
  display: flex;
  ${({ enm }: { type?: TeaserTypes; enm?: EnumTypes }) => {
    switch (enm) {
      case 'standard':
      default:
        return css`
          justify-content: flex-end;
          position: relative;
          bottom: 0;
          left: 0;
        `
      case 'top':
        return css`
          justify-content: flex-end;
          position: relative;
          bottom: 0;
          left: 0;
        `
    }
  }}
`
