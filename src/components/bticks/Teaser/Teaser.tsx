import { type FunctionComponent, type ReactNode } from 'react'
import {
  StyledTeaser,
  StyledTeaserDescription,
  StyledTeaserImage,
  StyledTeaserText,
  StyledTeaserTitle,
  // StyledTeaserFlag,
} from './Teaser.styles'

enum TeaserEnum {
  paid = 'paid',
  common = 'common',
}

enum Enum {
  standard = 'standard',
  top = 'top',
  compact = 'compact',
}

export type TeaserTypes = `${(typeof TeaserEnum)[keyof typeof TeaserEnum]}`
export type EnumTypes = `${(typeof Enum)[keyof typeof Enum]}`

interface TeaserProps {
  children?: ReactNode
  className?: string
  title: string
  text: string
  paidContent: boolean
  enm: EnumTypes
  imageCount?: number
  image?: string
  href?: string
}

const Teaser: FunctionComponent<TeaserProps> = ({
  className,
  title,
  text,
  paidContent,
  enm,
  image,
  href,
}) => {
  return (
    <StyledTeaser
      className={className}
      enm={enm}
      onClick={() => {
        window.open(`${href}`, 'mywindow')
      }}
    >
      <StyledTeaserImage
        paidContent={paidContent}
        enm={enm}
        src={image || ''}
      />
      <StyledTeaserDescription enm={enm}>
        <StyledTeaserTitle>{title}</StyledTeaserTitle>
        <StyledTeaserText>{text}</StyledTeaserText>
      </StyledTeaserDescription>
      {/* <StyledTeaserFlag enm={enm} /> */}
    </StyledTeaser>
  )
}

export default Teaser
