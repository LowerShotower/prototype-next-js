import { FunctionComponent, ReactNode } from 'react'
import {
  StyledPlaceholder,
  StyledSvgWrapper,
  StyledText,
} from './Placeholder.styles'
import Diagonal from './icons/Diagonal'
interface Props {
  text?: ReactNode
  className?: string
}
const Placeholder: FunctionComponent<Props> = ({ text, className }) => {
  return (
    <StyledPlaceholder className={className}>
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
