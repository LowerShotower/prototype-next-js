import Image from 'next/image'
import { type FunctionComponent, type ReactNode } from 'react'
import NewsTickerRow from './components/NewTickerRow/NewsTickerRow'
import arrows from '@/public/assets/icons/arrows.svg'
import {
  StyledNewsStickerButton,
  StyledNewsTicker,
  StyledNewsTickerButtons,
  StyledNewsTickerHeader,
  StyledNewsTickerList,
} from './NewsTicker.styles'

interface NewsTickerProps {
  children?: ReactNode
  className?: string
  style?: object
}

const row = {
  time: '14:43',
  title: 'Teaser,  enum: ticker',
  text: 'Mieterkündigungen für Flüchtlingsheim: Versammlung abgesagt',
}

const rows = Array.from(new Array(7), () => row)
const NewsTicker: FunctionComponent<NewsTickerProps> = ({
  className,
  children,
  style,
}) => {
  return (
    <StyledNewsTicker className={className} style={style}>
      <StyledNewsTickerHeader>NewsTicker</StyledNewsTickerHeader>
      <StyledNewsTickerList>
        {rows.map((props, index) => {
          return <NewsTickerRow key={index} {...props} />
        })}
        <NewsTickerRow />
      </StyledNewsTickerList>
      <StyledNewsTickerButtons>
        <StyledNewsStickerButton>
          <Image src={arrows} alt="arrows" />
        </StyledNewsStickerButton>
      </StyledNewsTickerButtons>
      {children}
    </StyledNewsTicker>
  )
}

export default NewsTicker
