import { type FunctionComponent, type ReactNode } from 'react'
import { StyledFlag } from './Flag.styles'
import flagIcon from '../../../src/public/assets/icons/flag.svg'
import Image from 'next/image'

interface FlagProps {
  children?: ReactNode
  className?: string
}

const Flag: FunctionComponent<FlagProps> = ({ className }) => {
  return (
    <StyledFlag className={className}>
      <Image src={flagIcon} alt={flagIcon} />
    </StyledFlag>
  )
}

export default Flag
