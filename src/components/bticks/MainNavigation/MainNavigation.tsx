import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
import { StyledLink } from '../Header/Header.styles'
import { StyledMainNavigation } from './MainNavigation.styles'

interface MainNavigationProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['MainNavigation']
}

const MainNavigation: FunctionComponent<MainNavigationProps> = ({
  className,
  style,
  data,
}) => {
  const { content } = data
  return (
    <StyledMainNavigation className={className} style={style}>
      {content?.map(({ name, label, reference }) => {
        return (
          <StyledLink key={name} href={reference || ''}>
            {label}
          </StyledLink>
        )
      })}
    </StyledMainNavigation>
  )
}

export default MainNavigation
