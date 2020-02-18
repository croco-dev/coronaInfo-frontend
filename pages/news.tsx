import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Jumbotron from '@/components/Jumbotron'

const NewsPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>뉴스 - 코로나인포 (CoronaInfo)</title>
      </Head>
      <Layout>
        <Jumbotron
          title="기사 모아보기"
          desc="'코로나19'에 관련된 뉴스 기사를 모아보실 수 있습니다."
        />
      </Layout>
    </>
  )
}

export default NewsPage
