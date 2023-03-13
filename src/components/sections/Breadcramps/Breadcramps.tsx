import { Breadcrumbs } from '@mui/material'
import { type FunctionComponent, type ReactNode } from 'react'
import { StyledBreadcramps } from './Breadcramps.styles'

interface BreadcrampsProps {
  children?: ReactNode
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
