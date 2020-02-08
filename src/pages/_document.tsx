import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head>
          <meta
            name="keywords"
            content="코로나, 코로나 치료법, 코로나 바이러스, 현황, 코로나 현황, 코로나 치료법 현황, 코로나 정보, 코로나 지도, 코로나 맵"
          />
          <meta name="description" content="코로나 바이러스 정보를 알려드립니다!" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="코로나인포 - Corona Info" />
          <meta property="og:description" content="코로나 바이러스 정보를 알려드립니다!" />
          <meta property="og:url" content="https://coronas.info" />
          <meta property="twitter:card" content="summary" />
          <meta name="twitter:title" content="코로나인포 - Corona Info" />
          <meta name="twitter:description" content="페이지 설명" />
          <meta name="twitter:image" content="http://www.mysite.com/article/article1.html" />
          <meta name="twitter:domain" content="코로나인포 - Corona Info" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
