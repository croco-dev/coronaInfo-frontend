import React from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
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
`

const DataBox = styled.div`
  padding: 25px 0;
`

const CardBox = styled.div`
  border: 1px solid #e8e8e8;
  padding: 20px 15px;
  margin: 25px 0;
  .raw {
    margin-top: 15px;
    display: block;
    background: #ececec;
    padding: 10px 20px;
  }
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
          {data.date}, {data.log_type} 가 변경되었습니다.
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
      <Layout>
        <Jumbotron>
          <Container>
            <h1>코로나인포 피드</h1>
            <p className="description">
              코로나인포에 언제 어떤 정보가 추가되었는지 확인할 수 있습니다. (1분마다 갱신)
            </p>
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

FeedPage.getInitialProps = async () => {
  const res = await fetch('https://api.coronas.info/feeds/?format=json')
  const json = await res.json()
  console.log(json)
  return { data: json }
}

export default FeedPage
