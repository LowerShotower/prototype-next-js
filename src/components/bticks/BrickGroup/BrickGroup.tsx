import Row from '@/components/layouts/layoutComponents/Row/Row'
import Section from '@/components/layouts/layoutComponents/Section/Section'
import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
import Brick from '../Brick/Brick'

interface BrickGroupProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['BrickGroup']
}

const BrickGroup: FunctionComponent<BrickGroupProps> = ({ data }) => {
  const { content } = data
  // console.log('content', content)
  console.log(Math.min(content.length, 4))

  return (
    <Section>
      Brickgroup
      <Row spacing={20} columns={{ lg: Math.min(content.length, 4) }}>
        {content?.map((item, id) => {
          if (item.type === 'brick') {
            return (
              <Row.Item key={`${item.id}${id}`}>
                <Brick data={item} />
              </Row.Item>
            )
          }
          if (item.type === 'brickgroup') {
            return <BrickGroup key={`${item.id}${id}`} data={item} />
          }
          return null
        })}
      </Row>
    </Section>
  )
}

export default BrickGroup
