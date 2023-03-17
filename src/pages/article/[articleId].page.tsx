import Head from 'next/head'
import Row from '@/components/layouts/layoutComponents/Row/Row'
// import Section from '@/components/layouts/layoutComponents/Section/Section'
import Ad from '@/components/bticks/ads/Ad/Ad'
import Placeholder from '@/components/Placeholder/Placeholder'
import Divider from '@/components/layouts/layoutComponents/Divider/Divider'
import Teaser from '@/components/bticks/Teaser/Teaser'
import SocialBar from '@/components/sections/SocialBar/SocialBar'
import Breadcramps from '@/components/sections/Breadcramps/Breadcramps'
import Link from 'next/link'
import Image from 'next/image'
import home from '@/public/assets/icons/home.svg'
import { components } from 'schema'
import { GetServerSideProps } from 'next/types'
// import Wall from '@/components/bticks/Wall/Wall'
import { groupBy } from 'lodash'
import Section from '@/components/layouts/layoutComponents/Section/Section'

import {
  StyledBody,
  StyledLayout,
  StyledWrapper,
} from '@/components/layouts/Layout/Layout.styles'
import {
  StyledAdSkyscraper,
  StyledBodyLayout,
  StyledContent,
  StyledMainContent,
} from '@/components/layouts/BodyLayout/BodyLayout.styles'
import AdBillboard from '@/components/bticks/ads/AdBillboard/AdBillboard'
import Footer from '@/components/bticks/Footer/Footer'
import Header from '@/components/bticks/Header/Header'
export const getServerSideProps: GetServerSideProps = async () => {
  //@ts-ignore
  // const { articleId } = context.params
  const res = await fetch(
    `http://msh-news.intetics.com:8080/stz/article/a26d8a68-b297-11ed-afa1-0242ac120002`
  )
  const data: components['schemas']['Wall'] = await res.json()
  console.log('ressort', data)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
interface ArticlePageProps {
  data: components['schemas']['Wall']
}

const ArticlePage = ({ data }: ArticlePageProps) => {
  const { content } = data
  const { header, footer } = groupBy(content, ({ type }) => type)
  //@ts-ignore
  const { bottomnavigation } = groupBy(header?.[0]?.content, ({ type }) => type)

  //@ts-ignore
  const bn = bottomnavigation?.[0] as components['schemas']['BottomNavigation']
  const breadcramps = bn?.content
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                  <Section>
                    <Breadcramps>
                      <>
                        <Link href="/">
                          <Image width={20} height={20} src={home} alt="home" />
                        </Link>
                        {breadcramps?.content?.map(
                          ({ name, reference }, index: number) => {
                            return (
                              <Link key={index} href={reference || ''}>
                                {name}
                              </Link>
                            )
                          }
                        )}
                      </>
                    </Breadcramps>
                  </Section>
                  <Section>
                    <p style={{ marginTop: 10, marginBottom: 10 }}>
                      Musiker in Beffendorf
                    </p>
                    <h1 style={{ marginBottom: 10 }}>
                      Akkordeonorchester präsentiert eigene CD
                    </h1>
                    <p style={{ marginBottom: 30 }}>
                      Ute Lauble 22.02.2023 - 15:48 Uhr
                    </p>
                  </Section>
                  <Section>
                    <Row spacing={10}>
                      <Row.Item columns={{ lg: 3 / 2, sm: 1 }}>
                        <>
                          <Placeholder style={{ minHeight: 343 }} />
                          <p style={{ marginTop: 10, marginBottom: 30 }}>
                            Die Musiker sind stolz ihre erste eigene CD. Foto:
                            Lauble
                          </p>
                          <div style={{ display: 'flex' }}></div>
                          <h4 style={{ marginTop: 10, marginBottom: 30 }}>
                            Lange musste man warten, doch jetzt endlich ist sie
                            da. Das Akkordeonorchester Beffendorf präsentiert
                            seine neue CD.
                          </h4>
                          <SocialBar />
                          <p style={{ marginTop: 10, marginBottom: 30 }}>
                            Mit dem Stück „Games of Throne“, eröffnete das
                            Akkordeonorchester Beffendorf musikalisch den Abend
                            im Gemeindehaus, an dem sie voller Freude ihre neue
                            CD vorstellen konnten.
                          </p>
                          <p style={{ marginTop: 10, marginBottom: 30 }}>
                            Eigentlich, so der Vorsitzende Eugen Werner, hätte
                            sie schon im Jahr 2022 fertig werden sollen, aber
                            verschiedene Gründe hätten die Auslieferung
                            verzögert. Doch „nach langem Warten ist sie endlich
                            da.“
                          </p>

                          <Divider style={{ marginBottom: 20 }} />
                          <Section title="Lesen Sie auch" fullWidth>
                            <Row spacing={10} columns={{ lg: 3, xs: 1 }}>
                              {[0, 1, 2].map((value) => {
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
                          <Divider style={{ marginBottom: 20 }} />
                          <h3 style={{ marginTop: 20, marginBottom: 20 }}>
                            Vereinsleben durcheinander gewirbelt
                          </h3>
                          <p style={{ marginTop: 10, marginBottom: 30 }}>
                            Corona, so Eugen Werner, hat so manches Vereinsleben
                            durcheinander gewirbelt. Das Akkordeonorchester
                            Beffendorf nutzte diese Zeit und bewarb sich beim
                            Förderprogramm „Neustart Amateurmusik“ des
                            Bundesmusikverbands Chor & Orchester und bekam den
                            Zuschlag. „Wir halten zusammen – gemeinsam mit Musik
                            durch die Coronazeit“, lautete der Projekttitel. Die
                            Argumentation „Mit viel Engagement und Einsatz haben
                            wir versucht, auf dem Weg zu bleiben. Das Ergebnis
                            aus den Proben nach Playalongs, in kleinen Gruppen,
                            Stimmproben sowie dem Üben zu Hause und dem Neustart
                            nach langen Monaten getrennt seins möchten wir auf
                            einer CD festhalten“, überzeugte die Jury.
                          </p>
                          <h3 style={{ marginTop: 20, marginBottom: 20 }}>
                            Vereinsleben durcheinander gewirbelt
                          </h3>
                          <p style={{ marginTop: 10, marginBottom: 30 }}>
                            Corona, so Eugen Werner, hat so manches Vereinsleben
                            durcheinander gewirbelt. Das Akkordeonorchester
                            Beffendorf nutzte diese Zeit und bewarb sich beim
                            Förderprogramm „Neustart Amateurmusik“ des
                            Bundesmusikverbands Chor & Orchester und bekam den
                            Zuschlag. „Wir halten zusammen – gemeinsam mit Musik
                            durch die Coronazeit“, lautete der Projekttitel. Die
                            Argumentation „Mit viel Engagement und Einsatz haben
                            wir versucht, auf dem Weg zu bleiben. Das Ergebnis
                            aus den Proben nach Playalongs, in kleinen Gruppen,
                            Stimmproben sowie dem Üben zu Hause und dem Neustart
                            nach langen Monaten getrennt seins möchten wir auf
                            einer CD festhalten“, überzeugte die Jury.
                          </p>
                          <Ad />
                        </>
                      </Row.Item>
                      <Row.Item columns={{ lg: 3 / 1, sm: 1 }}>
                        <>
                          <Ad title="Anzeige" />
                          <Ad />
                          <Ad />
                        </>
                      </Row.Item>
                    </Row>
                  </Section>
                  <Section title="Lesen Sie auch">
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
                </StyledContent>
                <>
                  {footer?.[0] && (
                    <Footer
                      data={footer?.[0] as components['schemas']['Footer']}
                    />
                  )}
                </>
              </StyledMainContent>
              <StyledAdSkyscraper />
            </StyledBodyLayout>
          </StyledBody>
        </StyledWrapper>
      </StyledLayout>
    </>
  )
}

// Index.getLayout = (page: ReactElement) => {
//   return (
//     <Layout>
//       <BodyLayout>{page}</BodyLayout>
//     </Layout>
//   )
// }

export default ArticlePage

//    <Section>
// <Breadcramps>
//   <Link href="/">
//     <Image width={20} height={20} src={home} alt="home" />
//   </Link>
//   <Link href="/article">BW von oben</Link>
//   <Link href="/ressort">Blaulicht</Link>
//   <Link href="">Newsletter</Link>
// </Breadcramps>
// </Section>
// <Section>
// <p style={{ marginTop: 10, marginBottom: 10 }}>
//   Musiker in Beffendorf
// </p>
// <h1 style={{ marginBottom: 10 }}>
//   Akkordeonorchester präsentiert eigene CD
// </h1>
// <p style={{ marginBottom: 30 }}>Ute Lauble 22.02.2023 - 15:48 Uhr</p>
// </Section>
// <Section>
// <Row spacing={10}>
//   <Row.Item columns={{ lg: 3 / 2, sm: 1 }}>
//     <>
//       <Placeholder style={{ minHeight: 343 }} />
//       <p style={{ marginTop: 10, marginBottom: 30 }}>
//         Die Musiker sind stolz ihre erste eigene CD. Foto: Lauble
//       </p>
//       <div style={{ display: 'flex' }}></div>
//       <h4 style={{ marginTop: 10, marginBottom: 30 }}>
//         Lange musste man warten, doch jetzt endlich ist sie da. Das
//         Akkordeonorchester Beffendorf präsentiert seine neue CD.
//       </h4>
//       <SocialBar />
//       <p style={{ marginTop: 10, marginBottom: 30 }}>
//         Mit dem Stück „Games of Throne“, eröffnete das
//         Akkordeonorchester Beffendorf musikalisch den Abend im
//         Gemeindehaus, an dem sie voller Freude ihre neue CD vorstellen
//         konnten.
//       </p>
//       <p style={{ marginTop: 10, marginBottom: 30 }}>
//         Eigentlich, so der Vorsitzende Eugen Werner, hätte sie schon
//         im Jahr 2022 fertig werden sollen, aber verschiedene Gründe
//         hätten die Auslieferung verzögert. Doch „nach langem Warten
//         ist sie endlich da.“
//       </p>

//       <Divider style={{ marginBottom: 20 }} />
//       <Section title="Lesen Sie auch" fullWidth>
//         <Row spacing={10} columns={{ lg: 3, xs: 1 }}>
//           {[0, 1, 2].map((value) => {
//             return (
//               <Row.Item key={value}>
//                 <Teaser
//                   paidContent={false}
//                   enm="standard"
//                   text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
//                   title="Teaser,  enum: standard"
//                 />
//               </Row.Item>
//             )
//           })}
//         </Row>
//       </Section>
//       <Divider style={{ marginBottom: 20 }} />
//       <h3 style={{ marginTop: 20, marginBottom: 20 }}>
//         Vereinsleben durcheinander gewirbelt
//       </h3>
//       <p style={{ marginTop: 10, marginBottom: 30 }}>
//         Corona, so Eugen Werner, hat so manches Vereinsleben
//         durcheinander gewirbelt. Das Akkordeonorchester Beffendorf
//         nutzte diese Zeit und bewarb sich beim Förderprogramm
//         „Neustart Amateurmusik“ des Bundesmusikverbands Chor &
//         Orchester und bekam den Zuschlag. „Wir halten zusammen –
//         gemeinsam mit Musik durch die Coronazeit“, lautete der
//         Projekttitel. Die Argumentation „Mit viel Engagement und
//         Einsatz haben wir versucht, auf dem Weg zu bleiben. Das
//         Ergebnis aus den Proben nach Playalongs, in kleinen Gruppen,
//         Stimmproben sowie dem Üben zu Hause und dem Neustart nach
//         langen Monaten getrennt seins möchten wir auf einer CD
//         festhalten“, überzeugte die Jury.
//       </p>
//       <h3 style={{ marginTop: 20, marginBottom: 20 }}>
//         Vereinsleben durcheinander gewirbelt
//       </h3>
//       <p style={{ marginTop: 10, marginBottom: 30 }}>
//         Corona, so Eugen Werner, hat so manches Vereinsleben
//         durcheinander gewirbelt. Das Akkordeonorchester Beffendorf
//         nutzte diese Zeit und bewarb sich beim Förderprogramm
//         „Neustart Amateurmusik“ des Bundesmusikverbands Chor &
//         Orchester und bekam den Zuschlag. „Wir halten zusammen –
//         gemeinsam mit Musik durch die Coronazeit“, lautete der
//         Projekttitel. Die Argumentation „Mit viel Engagement und
//         Einsatz haben wir versucht, auf dem Weg zu bleiben. Das
//         Ergebnis aus den Proben nach Playalongs, in kleinen Gruppen,
//         Stimmproben sowie dem Üben zu Hause und dem Neustart nach
//         langen Monaten getrennt seins möchten wir auf einer CD
//         festhalten“, überzeugte die Jury.
//       </p>
//       <Ad />
//     </>
//   </Row.Item>
//   <Row.Item columns={{ lg: 3 / 1, sm: 1 }}>
//     <>
//       <Ad title="Anzeige" />
//       <Ad />
//       <Ad />
//     </>
//   </Row.Item>
// </Row>
// </Section>
// <Section title="Lesen Sie auch">
// <Row spacing={10} columns={{ lg: 4, sm: 2, xs: 1 }}>
//   {[0, 1, 2, 3].map((value) => {
//     return (
//       <Row.Item key={value}>
//         <Teaser
//           paidContent={false}
//           enm="standard"
//           text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
//           title="Teaser,  enum: standard"
//         />
//       </Row.Item>
//     )
//   })}
// </Row>
// </Section>
