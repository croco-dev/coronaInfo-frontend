import React from 'react'
import Head from 'next/head'

const NoIE = () => {
  return (
    <>
      <Head>
        <title>코로나인포는 IE를 지원하지 않습니다.</title>
      </Head>
      <div
        style={{
          padding: '60px 100px',
          fontSize: '16px',
          lineHeight: 1.7,
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            marginBottom: '20px',
          }}
        >
          코로나인포는 Internet Explorer를 지원하지 않습니다.
        </h2>
        <u>Internet Explorer를 왜 사용하면 안되나요?</u>
        <ul
          style={{
            paddingLeft: '22px',
          }}
        >
          <li>최신 웹 기술에 대응하지 못하고 있습니다.</li>
          <li>더 이상 업데이트 되지 않아, 보안 문제에 취약합니다.</li>
          <li>웹 표준 (HTML)에 대응하지 못하고 있어, JavaScript 오류가 발생합니다.</li>
        </ul>
        <br />
        <p>코로나인포는 하단 브라우저들을 권장합니다.</p>
        <ul
          style={{
            paddingLeft: '22px',
          }}
        >
          <li>
            <a
              href="https://www.google.com/intl/ko/chrome/"
              rel="noopener"
              style={{
                color: '#2462c1',
                textDecoration: 'none',
              }}
            >
              Google Chrome (권장)
            </a>
          </li>
          <li>
            <a
              href="https://www.mozilla.org/ko/firefox/new/"
              rel="noopener"
              style={{
                color: '#2462c1',
                textDecoration: 'none',
              }}
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://www.microsoft.com/en-us/edge"
              rel="noopener"
              style={{
                color: '#2462c1',
                textDecoration: 'none',
              }}
            >
              Microsoft Edge (Chromium)
            </a>
          </li>
        </ul>
        <p>클릭 시, 다운로드 페이지로 이동됩니다. 불편을 드려 죄송합니다.</p>
      </div>
    </>
  )
}

export default NoIE
