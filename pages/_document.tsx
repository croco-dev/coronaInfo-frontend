import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head>
          <meta
            name="google-site-verification"
            content="f3t63McdfQwW6s1PtPOOaR_RifZvgwGRjMp0epjbSsU"
          />
          <meta name="naver-site-verification" content="d8d7494c6be7247cda2c620579801dacba054b4a" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
