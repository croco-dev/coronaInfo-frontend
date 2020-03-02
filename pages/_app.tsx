import React from 'react'
import App from 'next/app'
import ReactGA from 'react-ga'
import { DefaultSeo } from 'next-seo'
import * as Sentry from '@sentry/browser'

// 👁 Global Style
import '@/styles/core.scss'
import ChannelTalk from '@/components/ChannelTalk'

Sentry.init({ dsn: 'https://f6473d1b251f4eeca529512dd58ddfcf@sentry.io/3324211' })

class MyApp extends App {
  componentDidMount(): void {
    ReactGA.initialize('UA-158027501-01')
    ReactGA.pageview(window.location.pathname)
  }

  componentDidCatch(error, errorInfo): void {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })

      Sentry.captureException(error)
    })

    super.componentDidCatch(error, errorInfo)
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <>
        <DefaultSeo
          title="코로나인포"
          titleTemplate="%s - 코로나인포 (coronaInfo)"
          description="코로나바이러스감염증-19 (COVID-19) (일명 '우한 폐렴')의 국내 정보를 알려드립니다!"
          canonical="https://coronas.info"
          openGraph={{
            type: 'website',
            locale: 'ko_KR',
            url: 'https://coronas.info',
            // eslint-disable-next-line @typescript-eslint/camelcase
            site_name: '코로나인포',
            images: [{ url: '/static/images/bg.png' }],
          }}
          twitter={{
            handle: '@coronasinfo',
            site: '@coronasinfo',
            cardType: 'summary_large_image',
          }}
        />
        <ChannelTalk pluginId={process.env.CHANNEL_TALK} />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
