import Link from 'next/link'
import { type FunctionComponent, type ReactNode } from 'react'
import { StyledTagNav } from './TagNav.styles'

interface TagNavProps {
  children?: ReactNode
}

const TagNav: FunctionComponent<TagNavProps> = () => {
  return (
    <StyledTagNav>
      <Link href="">BW von oben</Link>
      <Link href="">Blaulicht</Link>
      <Link href="">Newsletter</Link>
    </StyledTagNav>
  )
}

export default TagNav
