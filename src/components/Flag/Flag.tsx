import { type FunctionComponent, type ReactNode } from 'react'
import { StyledFlag } from './Flag.styles'
import FlagIcon from '@/public/assets/icons/flag.svg'

interface FlagProps {
  children?: ReactNode
  className?: string
}

const Flag: FunctionComponent<FlagProps> = ({ className }) => {
  return (
    <StyledFlag className={className}>
      <FlagIcon />
    </StyledFlag>
  )
}

export default Flag
