import IconButton from '@/components/IconButton/IconButton'
import { type FunctionComponent, type ReactNode } from 'react'
import {
  StyledLeftGroup,
  StyledRightGroup,
  StyledSocialBar,
} from './SocialBar.styles'
import Image from 'next/image'
import copy from '@/public/assets/icons/copy.svg'
import arrow from '@/public/assets/icons/arrow.svg'
import mail from '@/public/assets/icons/mail.svg'
import print from '@/public/assets/icons/print.svg'
import flag from '@/public/assets/icons/flag.svg'

interface SocialBarProps {
  children?: ReactNode
  className?: string
  style?: object
}

const SocialBar: FunctionComponent<SocialBarProps> = ({ className }) => {
  return (
    <StyledSocialBar className={className}>
      <StyledLeftGroup>
        <IconButton>
          <Image width={20} height={20} src={print} alt="print" />
        </IconButton>
        <IconButton>
          <Image width={20} height={20} src={arrow} alt="arrow" />
        </IconButton>
        <IconButton>
          <Image width={20} height={20} src={copy} alt="copy" />
        </IconButton>
        <IconButton>
          <Image width={20} height={20} src={mail} alt="mail" />
        </IconButton>
      </StyledLeftGroup>
      <StyledRightGroup>
        <IconButton>
          <Image width={20} height={20} src={flag} alt="flag" />
        </IconButton>
      </StyledRightGroup>
    </StyledSocialBar>
  )
}

export default SocialBar
