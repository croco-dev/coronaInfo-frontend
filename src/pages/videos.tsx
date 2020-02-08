import React from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

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
  border: 1px solid #dadada;
  border-left: 6px solid var(--main);
  border-radius: 4px;
  padding: 20px 15px;
  margin: 25px 0;
  .raw {
    margin-top: 15px;
    display: block;
    background: #ececec;
    padding: 10px 20px;
  }
`

const Videos = ({ data }): JSX.Element => {
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
          <Link href={data.url}>
            <a target="_blank">{data.title}</a>
          </Link>
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
            <h1>영상 모아보기</h1>
            <p className="description">
              신종 코로나 바이러스에 대처하는 좋은 영상들을 알려드립니다!
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

Videos.getInitialProps = async () => {
  const json = [
    {
      title: "[자막뉴스] '퇴원' 신종 코로나 2번 환자, 이렇게 치료했다 / YTN",
      url: 'https://www.youtube.com/watch?v=C7ZXQbtMx-M',
    },
    {
      title: "'신종 코로나' 추가 확진자 없지만...의심환자 급증 / YTN",
      url: 'https://www.youtube.com/watch?v=Pmcmwh5A6D8',
    },
    {
      title: '키친타올·고무줄로 마스크를 만들 수 있다고?! 신종 코로나 예방 마스크 만들기!',
      url: 'https://www.youtube.com/watch?v=1rbdfwH0wUc',
    },
    {
      title: '구하기 힘든 손 소독제, 집에서 쉽게 만드는 방법 / SBS',
      url: 'https://www.youtube.com/watch?v=FJJaK8663a8',
    },
    {
      title: '신종 코로나바이러스감염증 예방행동수칙',
      url: 'https://www.youtube.com/watch?v=GXcKt4MA9cs',
    },
    { title: '신종코로나 바이러스 예방수칙', url: 'https://www.youtube.com/watch?v=CuNLEqShGOw' },
  ]
  return { data: json }
}

export default Videos
