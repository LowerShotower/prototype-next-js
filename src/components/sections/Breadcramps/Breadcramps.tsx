import { Breadcrumbs } from '@mui/material'
import { type FunctionComponent } from 'react'
import { StyledBreadcramps } from './Breadcramps.styles'

interface BreadcrampsProps {
  children?: JSX.Element | JSX.Element[]
  className?: string
}

const Breadcramps: FunctionComponent<BreadcrampsProps> = ({
  className,
  children,
}) => {
  return (
    <StyledBreadcramps className={className}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {children}
      </Breadcrumbs>
    </StyledBreadcramps>
  )
}

export default Breadcramps
