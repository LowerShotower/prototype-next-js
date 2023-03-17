import '@/styles/globals.scss'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppWithLayoutProps = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppWithLayoutProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
  return <Component {...pageProps} />
}
