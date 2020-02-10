import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import ReactGA from 'react-ga'

// 👁 Global Style
import '@/styles/core.scss'

class MyApp extends App {
  componentDidMount(): void {
    ReactGA.initialize('UA-158027501-01')
    ReactGA.pageview(window.location.pathname)
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>코로나인포 - CoronaInfo</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
