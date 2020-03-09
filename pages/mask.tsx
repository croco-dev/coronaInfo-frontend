import React from 'react'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Jumbotron from '@/components/Jumbotron'

const AlertMessage = styled.div`
  line-height: 1.7;
  padding: 40px 0;
  text-align: center;
  background: rgb(255, 210, 210);
  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`

const Mask = () => {
  return (
    <>
      <NextSeo title="마스크 재고 현황" />
      <Layout>
        <Jumbotron
          title="마스크 재고 현황"
          desc="내 반경 3km 이내에서 마스크 재고 현황을 확인해보세요!"
        />
        <AlertMessage>
          <Container>
            <h2>데이터 공개 시일까지 제공되지 않는 서비스입니다.</h2>
            <p>빠른 시일 내로 서비스를 재개할 수 있도록 노력하겠습니다.</p>
            <p>서비스 이용에 불편을 드려 죄송합니다.</p>
          </Container>
        </AlertMessage>
      </Layout>
    </>
  )
}

export default Mask
