import React from 'react'
import App from 'next/app'
import Head from 'next/head'

// 👁 Global Style
import '@/styles/core.scss'

class MyApp extends App {
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
