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

const Mask = (): JSX.Element => {
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
            <h2>부정확한 정보로 인해, 서비스를 중지합니다.</h2>
            <p>현재 정보를 올바르게 제공해드리지 못하고 있어, 서비스를 중지하였습니다.</p>
            <p>데이터 제공 재개일이 공개되지 않았습니다. 감사합니다.</p>
          </Container>
        </AlertMessage>
        <AlertMessage
          style={{
            marginTop: '20px',
          }}
        >
          <Container>
            <h2>데이터 제공에 관련된 공지</h2>
            <p>
              데이터는 "한국정보화진흥원"에서 제공 받았습니다. 데이터 관련 문의는 자제 부탁드립니다.
            </p>
          </Container>
        </AlertMessage>
      </Layout>
    </>
  )
}

export default Mask
