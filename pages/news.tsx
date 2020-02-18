import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Jumbotron from '@/components/Jumbotron'

const Content = styled.div`
  padding: 30px 0;
  background: #fff;
`

const CardContainer = styled.div``

const Card = styled.a`
  display: block;
  border-radius: 6px;
  border: 2px solid #dadce0;
  padding: 20px 17px;
  margin: 15px 0;
  line-height: 1.4;
  text-decoration: none;

  &:hover,
  &:focus {
    border: 2px solid #c361ff;
    h3 {
      color: #c05bfd;
    }
  }

  h3 {
    color: #333;
    font-size: 1.2rem;
  }
  p {
    color: #757575;
    font-size: 0.83rem;
    margin-top: 7px;
  }
`

const NewsPage = ({ data }): JSX.Element => {
  const [store, setStore] = useState(data)
  const DataCard = ({ data }): JSX.Element => {
    return (
      <Card href={data.originallink}>
        <h3 dangerouslySetInnerHTML={{ __html: data.title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      </Card>
    )
  }

  useEffect(() => {
    const timer = setInterval(async () => {
      const res = await fetch(`${process.env.API_URL}/news/?format=json`)
      const json = await res.json()
      setStore(json)
    }, 10000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Head>
        <title>뉴스 - 코로나인포 (CoronaInfo)</title>
      </Head>
      <Layout>
        <Jumbotron
          title="실시간 기사"
          desc="'코로나19'에 관련된 뉴스 기사를 실시간으로 모아보실 수 있습니다."
        />
        <Content>
          <Container>
            <CardContainer>
              {store.news.map((row, i) => {
                return <DataCard data={row} key={i} />
              })}
            </CardContainer>
          </Container>
        </Content>
      </Layout>
    </>
  )
}

NewsPage.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/news/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default NewsPage
