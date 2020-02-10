import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from '../layouts/main'
import Container from '../components/Container'
import fetch from 'isomorphic-unfetch'

const Jumbotron = styled.div`
  background: #f1f1f1;
  padding: 35px 0;
  line-height: 1.6;
  h1 {
    font-size: 1.7rem;
    font-weight: 700;
  }
  p.description {
    font-size: 1rem;
  }
  @media (max-width: 992px) {
    padding: 35px 10px;
  }
`

const DataBox = styled.div`
  padding: 25px 0;
`

const CardBox = styled.div`
  background: #ffffff;
  border-radius: 13px;
  margin: 25px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  line-height: 150%;
  @media (max-width: 992px) {
    margin: 17px 10px;
  }
  .cc-h {
    background: #e6e6e6;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
  }
  .cc-a {
    display: flex;
    padding: 0 10px;
  }
  .head {
    margin: 20px 4px;
    background: #333;
    border-radius: 15px;
    color: #fff;
    padding: 5px 13px;
    &.w {
      background: #e0e0e0;
      color: #333;
    }
    &.b {
      background: #59aafd;
    }
    &.f {
      background: var(--main);
    }
  }
  .content {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`

const PatientsPage = ({ data }): JSX.Element => {
  const DataShow = (): JSX.Element => {
    return (
      <>
        <DataBox>
          <div className="row">
            {data.map((row, i) => {
              return (
                <div className="col-xs-12 col-md-6" key={i}>
                  <Card data={row} />
                </div>
              )
            })}
          </div>
        </DataBox>
      </>
    )
  }

  const Card = ({ data }): JSX.Element => {
    return (
      <>
        <CardBox>
          <div className="cc-h">
            <span>{data.index}</span>번째 확진자
          </div>
          <div className="cc-a">
            {data.status === '확진 및 격리' ? (
              <div className="head f">{data.status}</div>
            ) : (
              <div className="head b">{data.status}</div>
            )}
            <div className="content">{data.date}에 확진 판정</div>
          </div>
        </CardBox>
      </>
    )
  }

  const DataLoading = (): JSX.Element => (
    <>
      <div
        style={{
          padding: '20px 0px',
          textAlign: 'center',
        }}
      >
        <p>데이터가 없습니다.</p>
      </div>
    </>
  )

  return (
    <>
      <Layout>
        <Head>
          <title>확진자 리스트 - 코로나인포 (CoronaInfo)</title>
        </Head>
        <Jumbotron>
          <Container>
            <h1>확진자 리스트</h1>
            <p className="description">확진자 리스트를 확인할 수 있습니다.</p>
          </Container>
        </Jumbotron>
        {data && data.length > 0 ? (
          <>
            <Container>
              <DataShow />
            </Container>
          </>
        ) : (
          <DataLoading />
        )}
      </Layout>
    </>
  )
}

PatientsPage.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/patients/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default PatientsPage
