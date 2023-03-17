import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
import { StyledUserNavigation } from './UserNavigation.styles'

interface UserNavigationProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['UserNavigation']
}

const UserNavigation: FunctionComponent<UserNavigationProps> = ({
  className,
  children,
  style,
}) => {
  return (
    <StyledUserNavigation className={className} style={style}>
      <StyledLink href="">
        <Image src={search} alt="search" />
      </StyledLink>
      <StyledLink href="">
        <Image src={person} alt="person" />
      </StyledLink>
      <StyledLink href="">
        <Image src={triangle} alt="triangle" />
      </StyledLink>
    </StyledUserNavigation>
  )
}

export default UserNavigation
