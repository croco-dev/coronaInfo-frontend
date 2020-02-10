import React from 'react'
import styled from '@emotion/styled'
import Layout from '../layouts/main'
import Container from '../components/Container'
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

const CardBox = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 20px 15px;
  margin: 10px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  .raw {
    margin-top: 15px;
    display: block;
    background: #ececec;
    padding: 10px 20px;
  }
  .desc {
    display: block;
    text-align: center;
    font-size: 1.12rem;
    font-weight: 500;
    text-decoration: none;
    color: #333;
    margin-top: 15px;
    line-height: 1.4;
  }

  img {
    width: 100%;
  }
  @media (max-width: 992px) {
    margin: 15px 25px;
  }
`

const Videos = ({ data, version }): JSX.Element => {
  const DataShow = (): JSX.Element => {
    return (
      <>
        {data.map((row, i) => {
          return (
            <div key={i} className={'col-xs-12 col-md-4'}>
              <Card data={row} key={i} />
            </div>
          )
        })}
      </>
    )
  }

  const Card = ({ data }): JSX.Element => {
    return (
      <>
        <CardBox>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <img
              src={
                'https://img.youtube.com/vi/' +
                data.url
                  .replace('https://www.youtube.com/watch?v=', '')
                  .replace('https://youtu.be/', '') +
                '/maxresdefault.jpg'
              }
              alt={data.title}
            />
          </a>
          <a href={data.url} target="_blank" rel="noopener noreferrer" className="desc">
            {data.title}
          </a>
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
      <Layout version={version}>
        <Jumbotron>
          <Container>
            <h1>영상 모아보기</h1>
            <p className="description">
              신종 코로나 바이러스에 대처하는 좋은 영상들을 알려드립니다!
            </p>
          </Container>
        </Jumbotron>
        <div className="row" style={{ padding: '20px 0' }}>
          {data && data.length > 0 ? (
            <>
              <Container>
                <div className="row">
                  <DataShow />
                </div>
              </Container>
            </>
          ) : (
            <DataLoading />
          )}
        </div>
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
    { title: '신종코로나 바이러스 예방수칙', url: 'https://www.youtube.com/watch?v=CuNLEqShGOw' },
    {
      title: '중국, 사망 908명·확진 4만 명 넘어...일일 사망자 또 최대 증가 / YTN',
      url: 'https://www.youtube.com/watch?v=VvSV1bayCQw',
    },
    {
      title: '"신종 코로나" 직격탄…휴직에 희망퇴직까지 / KBS뉴스(News)',
      url: 'https://www.youtube.com/watch?v=BGMhGfAI84U',
    },
    {
      title: '[속보] 국내 신종 코로나바이러스 2명 추가 발생...27명으로 늘어 / YTN',
      url: 'https://www.youtube.com/watch?v=v5ga7fLNcxo',
    },
    {
      title:
        '"신종 코로나" 관련 중앙사고수습본부 브리핑 - [끝까지 LIVE]MBC 뉴스특보 2020년 2월 10일',
      url: 'https://www.youtube.com/watch?v=5B-OuWqzJgQ',
    },
    {
      title: '"중국 방문" 27번 환자, 신종 코로나 검사 못 받았다 (정부브리핑) / SBS',
      url: 'https://www.youtube.com/watch?v=9ztBPhPA0Ho',
    },
  ]
  const version = await fetch(`${process.env.API_URL}/versions/?format=json`)
  const verJson = await version.json()
  return { data: json, version: verJson[0].version }
}

export default Videos
