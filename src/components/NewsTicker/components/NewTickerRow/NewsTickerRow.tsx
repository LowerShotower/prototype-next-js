import { type FunctionComponent, type ReactNode } from 'react'
import {
  StyledContentPart,
  StyledLine,
  StyledNewTickerRow,
  StyledText,
  StyledTime,
  StyledTimePart,
  StyledTitle,
} from './NewsTickerRow.styles'

interface NewsTickerRowProps {
  children?: ReactNode
  className?: string
  style?: object
  time?: string
  title?: string
  text?: string
}

const NewsTickerRow: FunctionComponent<NewsTickerRowProps> = ({
  className,
  style,
  time,
  title,
  text,
}) => {
  return (
    <StyledNewTickerRow className={className} style={style}>
      <StyledTimePart>
        <StyledTime>{time}</StyledTime>
        <StyledLine direction="vertical" />
      </StyledTimePart>
      <StyledContentPart>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
      </StyledContentPart>
    </StyledNewTickerRow>
  )
}

export default NewsTickerRow
