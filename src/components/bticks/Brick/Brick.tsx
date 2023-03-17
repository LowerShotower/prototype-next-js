import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
import Ad from '../ads/Ad/Ad'
// import ArticleHeader from '../ArticleHeader/ArticleHeader'
import Teaser from '../Teaser/Teaser'

interface BrickProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['Brick']
}

const Brick: FunctionComponent<BrickProps> = ({ data }) => {
  const { content } = data
  return (
    <>
      brick
      {content?.map((item, index) => {
        const _type = item.type
        if (_type === 'image') {
          return <div key={item.id}>image</div>
        }
        if (_type === 'articleheader') {
          return <h3 key={item.headline}>header</h3>
        }
        if (
          _type === 'standardteaser' ||
          _type === 'topteaser' ||
          _type === 'tickerteaser' ||
          _type === 'readmoreteaser' ||
          _type === 'recoteaser' ||
          _type === 'compactteaser'
        ) {
          return (
            <Teaser
              key={`${item.kicker} ${index}`}
              paidContent={true}
              enm="standard"
              title={`shortTitle ${item.shortTitle}` || ''}
              image={item.image?.reference}
              href={item.reference}
              text={
                `text -> ${item.text}| title -> ${item.title}| imageCount -> ${item.imageCount}` ||
                ''
              }
            />
          )
        }
        if (
          _type === 'customad' ||
          _type === 'rpdad' ||
          _type === 'nativead' ||
          _type === 'taboolaad'
        ) {
          return <Ad key={`${item.type}${index}`} />
        }
        // if (_type === 'articleheader') {
        //   return <ArticleHeader text={item.headline} />
        // }
      })}
    </>
  )
}

export default Brick
