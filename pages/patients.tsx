import React from 'react'
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
`

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

const PatientsPage = ({ data }): JSX.Element => {
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
          {data.date},
          <br />
          {data.index}번째 확진자가 {data.status}되었습니다.
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
