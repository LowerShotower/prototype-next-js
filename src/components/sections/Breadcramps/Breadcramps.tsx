import TagNav from '@/components/TagNav/TagNav'
import { type FunctionComponent, type ReactNode } from 'react'
import { StyledBreadcramps } from './Breadcramps.styles'

interface BreadcrampsProps {
  children?: ReactNode
  className?: string
}

const Breadcramps: FunctionComponent<BreadcrampsProps> = ({ className }) => {
  return (
    <StyledBreadcramps className={className}>
      <TagNav />
    </StyledBreadcramps>
  )
}

export default Breadcramps
