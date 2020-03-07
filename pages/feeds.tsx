import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Emoji from '@/components/Emoji'
import Link from 'next/link'

const DeprecatedNotice = styled.div`
  text-align: center;
  line-height: 1.6;
`

const Feeds = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>영상 모아보기 - 코로나인포 (CoronaInfo)</title>
      </Head>
      <Layout>
        <div style={{ background: '#fff' }}>
          <Container>
            <div style={{ padding: '50px 0' }}>
              <DeprecatedNotice>
                <p>
                  해당 기능은 더 이상 제공되지 않습니다. <Emoji str="😥" />
                </p>
                <p>
                  <Link href="/">
                    <a>메인으로 돌아가기</a>
                  </Link>
                </p>
              </DeprecatedNotice>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  )
}
export default Feeds
