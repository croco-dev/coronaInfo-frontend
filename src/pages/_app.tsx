import React from 'react'
import App from 'next/app'

// 👁 Global Style
import '@/styles/core.scss'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
