import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  csp = `default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval';
script-src * data: blob: 'unsafe-inline' 'unsafe-eval';
connect-src * data: blob: 'unsafe-inline';
img-src * data: blob: 'unsafe-inline';
frame-src * data: blob: ;
style-src * data: blob: 'unsafe-inline';
font-src * data: blob: 'unsafe-inline';`
  render(): JSX.Element {
    return (
      <html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={this.csp} />
          <meta
            name="keywords"
            content="코로나, 코로나 치료법, 코로나 바이러스, 현황, 코로나 현황, 코로나 치료법 현황, 코로나 정보, 코로나 지도, 코로나 맵"
          />
          <meta
            name="google-site-verification"
            content="f3t63McdfQwW6s1PtPOOaR_RifZvgwGRjMp0epjbSsU"
          />
          <meta name="naver-site-verification" content="d8d7494c6be7247cda2c620579801dacba054b4a" />
          <meta name="description" content="코로나 바이러스 정보를 알려드립니다!" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="코로나인포 - Corona Info" />
          <meta property="og:description" content="코로나 바이러스 정보를 알려드립니다!" />
          <meta property="og:url" content="https://coronas.info" />
          <meta property="og:image" content="/static/images/bg.png" />
          <meta property="twitter:card" content="summary" />
          <meta name="twitter:title" content="코로나인포 - Corona Info" />
          <meta name="twitter:description" content="페이지 설명" />
          <meta name="twitter:image" content="/static/images/bg.png" />
          <meta name="twitter:domain" content="코로나인포 - Corona Info" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <link rel="canonical" href="https://coronas.info" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
