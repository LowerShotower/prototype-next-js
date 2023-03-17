import AdBillboard from '@/components/bticks/ads/AdBillboard/AdBillboard'
import Footer from '@/components/bticks/Footer/Footer'
import {
  StyledAdSkyscraper,
  StyledBodyLayout,
  StyledContent,
  StyledMainContent,
} from '@/components/layouts/BodyLayout/BodyLayout.styles'
import {
  StyledBody,
  StyledLayout,
  StyledWrapper,
} from '@/components/layouts/Layout/Layout.styles'
import { groupBy } from 'lodash'
import { type FunctionComponent, type ReactNode } from 'react'
import { components } from 'schema'
import { StyledFooter } from '../Footer/Footer.styles'
import Header from '../Header/Header'
import PageContent from '../PageContent/PageContent'
import { StyledWall } from './Wall.styles'

interface WallProps {
  children?: ReactNode
  className?: string
  style?: object
  data: components['schemas']['Wall']
}

const Wall: FunctionComponent<WallProps> = ({ className, style, data }) => {
  console.log(data)

  const { content } = data
  const { header, pagecontent, footer } = groupBy(content, ({ type }) => type)
  return (
    <>
      <StyledWall className={className} style={style}></StyledWall>

      <StyledLayout>
        <StyledWrapper>
          {header?.[0] && (
            <Header data={header[0] as components['schemas']['Header']} />
          )}
          <StyledBody>
            <StyledBodyLayout>
              <StyledMainContent>
                <AdBillboard />
                <StyledContent>
                  {pagecontent?.[0] && (
                    <PageContent
                      data={
                        pagecontent[0] as components['schemas']['PageContent']
                      }
                    />
                  )}
                </StyledContent>
                <StyledFooter>
                  {' '}
                  {footer?.[0] && (
                    <Footer
                      data={footer[0] as components['schemas']['Footer']}
                    />
                  )}
                </StyledFooter>
              </StyledMainContent>
              <StyledAdSkyscraper />
            </StyledBodyLayout>
          </StyledBody>
        </StyledWrapper>
      </StyledLayout>
    </>
  )
}

export default Wall
