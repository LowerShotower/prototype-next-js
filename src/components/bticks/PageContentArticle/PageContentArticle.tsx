import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
// import BrickGroup from '../BrickGroup/BrickGroup'

interface PageContentProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['PageContent']
}

const PageContent: FunctionComponent<PageContentProps> = ({ data }) => {
  const { content } = data
  return <>{content}</>
}

export default PageContent
