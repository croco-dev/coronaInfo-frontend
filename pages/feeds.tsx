import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from 'layouts/main'
import Container from 'components/Container'
import fetch from 'isomorphic-unfetch'
import Jumbotron from '../components/Jumbotron'

const DataBox = styled.div`
  padding: 25px 0;
`

const CardBox = styled.div`
  background: #ffffff;
  border-left: 6px solid var(--main);
  border-radius: 4px;
  padding: 20px 15px;
  margin: 25px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  line-height: 150%;
  .raw {
    margin-top: 15px;
    display: block;
    background: #ececec;
    padding: 10px 20px;
  }
`

const DateSpan = styled.span`
  color: #333;
  display: block;
  font-size: 20px;
  margin-bottom: 8px;
`

const FeedPage = ({ data }): JSX.Element => {
  const DataShow = (): JSX.Element => {
    return (
      <>
        <DataBox>
          {data.map((row, i) => {
            return <Card data={row} key={i} />
          })}
        </DataBox>
      </>
    )
  }

  const Card = ({ data }): JSX.Element => {
    return (
      <>
        <CardBox>
          <DateSpan>{data.date}</DateSpan>
          {data.index}번째 확진자가{' '}
          {data.log_type === 'movements'
            ? '이동경로 정보가 업데이트되었습니다.'
            : `${data.status}되었습니다.`}
          {data.place ? <span className="raw">{data.place}</span> : <></>}
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
      <Head>
        <title>피드 - 코로나인포 (CoronaInfo)</title>
      </Head>
      <Layout>
        <Jumbotron
          title="코로나인포 피드"
          desc="코로나인포에 언제 어떤 정보가 추가되었는지 확인할 수 있습니다."
        />
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

FeedPage.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/feeds/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default FeedPage
