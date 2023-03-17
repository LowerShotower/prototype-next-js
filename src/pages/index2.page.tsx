import Head from 'next/head'
import Layout from '@/components/layouts/Layout/Layout'
import { ReactElement } from 'react'
import BodyLayout from '@/components/layouts/BodyLayout/BodyLayout'
import Teaser from '@/components/bticks/Teaser/Teaser'
import Row from '@/components/layouts/layoutComponents/Row/Row'
import Html from '@/components/Html/Html'
import Section from '@/components/layouts/layoutComponents/Section/Section'
import Ad from '@/components/bticks/ads/Ad/Ad'
import Subsection from '@/components/layouts/layoutComponents/Subsection/Subsection'
import Divider from '@/components/layouts/layoutComponents/Divider/Divider'
import TagNav from '@/components/sections/TagNav/TagNav'
import NewsTicker from '@/components/NewsTicker/NewsTicker'
import Region from '@/components/layouts/layoutComponents/Region/Region'

export async function getServerSideProps() {
  const res = await fetch(
    `http://msh-news.intetics.com:8080/stz/article/a26d8a68-b297-11ed-afa1-0242ac120002`
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

const Index = ({ data }: { data?: object }) => {
  console.log(data)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div>some text</div>
        {/* {JSON.stringify(data)} */}
        <Section>
          <TagNav />
        </Section>
        <Section>
          <Html />
        </Section>
        <Section>
          <Row spacing={10}>
            <Row.Item columns={{ lg: 3 / 2, sm: 1 }}>
              <Teaser
                paidContent={false}
                enm="top"
                text="The largest community of photo enthusiasts"
                title="Teaser,  enum: top, imageCount > 1"
              />
            </Row.Item>
            <Row.Item columns={{ lg: 3 / 1, sm: 1 }}>
              <Teaser
                paidContent={false}
                enm="standard"
                text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                title="Teaser,  enum: standard"
              />
            </Row.Item>
          </Row>
        </Section>
        <Section>
          <Html />
        </Section>
        <Section>
          <Row spacing={10} columns={{ lg: 3, sm: 2 }}>
            {[0, 1, 2, 3, 4, 5].map((value) => {
              if (value === 2) {
                return (
                  <Row.Item key={value}>
                    <Ad key={value} title="Anzeige" />
                  </Row.Item>
                )
              }
              if (value === 3) {
                return (
                  <Row.Item key={value}>
                    <Ad key={value} />
                  </Row.Item>
                )
              }
              return (
                <Row.Item key={value}>
                  <Teaser
                    paidContent={false}
                    enm="standard"
                    text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                    title="Teaser,  enum: standard"
                  />
                </Row.Item>
              )
            })}
          </Row>
        </Section>
        <Section>
          <Subsection
            type="paid"
            headerTitle="Das Beste aus SB Plus"
            footerTitle="Weitere SB+ Artikel anzeigen>>"
          >
            <Row spacing={10} columns={{ lg: 2, sm: 1 }}>
              {[0, 1].map((value) => {
                return (
                  <Row.Item key={value}>
                    <Teaser
                      paidContent={true}
                      enm="standard"
                      text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                      title="SB+   Teaser,  enum: standard, paidContent: true"
                    />
                  </Row.Item>
                )
              })}
            </Row>
          </Subsection>
        </Section>
        <Section>
          <Row spacing={10}>
            <Row.Item columns={{ lg: 3 / 2 }}>
              <Row spacing={10} columns={{ lg: 2, xs: 1 }}>
                {[0, 1, 3, 4].map((value) => {
                  return (
                    <Row.Item key={value}>
                      <Teaser
                        paidContent={false}
                        enm="standard"
                        text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                        title="Teaser,  enum: standard"
                      />
                    </Row.Item>
                  )
                })}
              </Row>
            </Row.Item>
            <Row.Item columns={{ lg: 3 / 1 }}>
              <Ad />
            </Row.Item>
            <>
              {[0, 1, 2].map((value) => {
                return (
                  <Row.Item spacing={10} columns={{ lg: 3 }} key={value}>
                    <Teaser
                      paidContent={false}
                      enm="standard"
                      text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                      title="Teaser,  enum: standard"
                    />
                  </Row.Item>
                )
              })}
            </>
          </Row>
        </Section>
        <Section title="Region und Land">
          <Row spacing={10}>
            <>
              {[0, 1].map((value) => {
                return (
                  <Row.Item key={value} spacing={10} columns={{ lg: 2, xs: 1 }}>
                    <Teaser
                      paidContent={false}
                      enm="compact"
                      text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                      title="Teaser,  enum: standard"
                    />
                  </Row.Item>
                )
              })}
            </>
            <>
              {[0, 1, 2].map((value) => {
                return (
                  <Row.Item key={value} spacing={10} columns={{ lg: 3, xs: 1 }}>
                    <Teaser
                      paidContent={false}
                      enm="standard"
                      text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                      title="Teaser,  enum: standard"
                    />
                  </Row.Item>
                )
              })}
            </>
          </Row>
        </Section>
        <Section title="Sport">
          <Row spacing={10}>
            <>
              {[0, 1].map((value) => {
                return (
                  <Row.Item key={value} spacing={10} columns={{ lg: 2, xs: 1 }}>
                    <Teaser
                      paidContent={false}
                      enm="compact"
                      text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                      title="Teaser,  enum: standard"
                    />
                  </Row.Item>
                )
              })}
            </>
            <>
              {[0, 1, 2].map((value) => {
                return (
                  <Row.Item key={value} spacing={10} columns={{ lg: 3, xs: 1 }}>
                    <Teaser
                      paidContent={false}
                      enm="standard"
                      text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                      title="Teaser,  enum: standard"
                    />
                  </Row.Item>
                )
              })}
            </>
          </Row>
        </Section>
        <Section>
          <Divider />
        </Section>
        <Section title="Verlagsangebote">
          <Row spacing={10} columns={{ lg: 4, sm: 2, xs: 1 }}>
            {[0, 1, 2, 3].map((value) => {
              return (
                <Row.Item key={value}>
                  <Teaser
                    paidContent={false}
                    enm="standard"
                    text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                    title="Teaser,  enum: standard"
                  />
                </Row.Item>
              )
            })}
          </Row>
        </Section>
        <Section>
          <Divider />
        </Section>
        <Section>
          <Region>
            <Row spacing={0}>
              <Row.Item columns={{ lg: 3 / 2 }}>
                <NewsTicker />
              </Row.Item>
              <Row.Item columns={{ lg: 3 }}></Row.Item>
            </Row>
          </Region>
        </Section>
      </>
    </>
  )
}

Index.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <BodyLayout>{page}</BodyLayout>
    </Layout>
  )
}

export default Index