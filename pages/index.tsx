import React from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import { NextSeo } from 'next-seo'

const HomeStyle = styled.div`
  background: #fff;
  padding: 40px 0;
  word-break: break-all;
  line-height: 1.6;
  div {
    font-size: 14px;
    margin: 0 auto;
    max-width: 600px;
    padding: 0 20px;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`

const Home = (): JSX.Element => {
  return (
    <>
      <NextSeo description={'코로나인포'} />
      <Layout>
        <HomeStyle>
          <div>
            <h2>코로나인포 정보 서비스 종료 안내</h2>
            <p>코로나인포는 2020년 2월 3일에 시작한 COVID-19 정보 페이지입니다.</p>
            <p>&nbsp;</p>
            <p>
              정확한 정보를 전달하기 위한 것이 목적이였지만, 정보 업데이트와 꾸준한 유지보수의
              어려움으로 서비스 종료를 결정하였습니다.
            </p>
            <p>이 공지가 제공된 이후로, 마스크 재고 현황을 제외한 모든 기능들을 종료하였습니다.</p>
            <p>&nbsp;</p>
            <p>
              마스크 재고 현황의 경우에는, 재고 API 제공이 중단될 때까지 서비스를 유지 할
              예정입니다.
            </p>
            <p>&nbsp;</p>
            <p>그 동안 코로나인포를 이용해주셔서 감사합니다.</p>
            <p>- 개발자 정도현, 강희원 드림</p>
          </div>
        </HomeStyle>
      </Layout>
    </>
  )
}

export default Home
