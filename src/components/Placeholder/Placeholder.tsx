import { FunctionComponent, ReactNode } from 'react'
import {
  StyledPlaceholder,
  StyledSvgWrapper,
  StyledText,
} from './Placeholder.styles'
import Diagonal from './icons/Diagonal'
export interface PlaceholderProps {
  text?: ReactNode
  className?: string
  style?: object
}
const Placeholder: FunctionComponent<PlaceholderProps> = ({
  text,
  className,
  ...otherProps
}) => {
  return (
    <StyledPlaceholder className={className} {...otherProps}>
      <StyledSvgWrapper>
        <Diagonal reversed={false} />
      </StyledSvgWrapper>
      <StyledText>{text}</StyledText>
      <StyledSvgWrapper>
        <Diagonal reversed={true} />
      </StyledSvgWrapper>
    </StyledPlaceholder>
  )
}

export default Placeholder
