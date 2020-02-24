import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Emoji from '@/components/Emoji'
import Link from 'next/link'
import Jumbotron from '@/components/Jumbotron'

const DeprecatedNotice = styled.div`
  text-align: center;
  line-height: 1.6;
`

const Videos = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>영상 모아보기 - 코로나인포 (CoronaInfo)</title>
      </Head>
      <Layout>
        <Jumbotron
          title="영상 모아보기"
          desc="신종 코로나 바이러스에 대처하는 좋은 영상들을 알려드립니다!"
        />
        <div style={{ background: '#fff' }}>
          <Container>
            <div style={{ padding: '50px 0' }}>
              <DeprecatedNotice>
                <p>
                  해당 기능은 더 이상 제공되지 않습니다. <Emoji str="😥" />
                </p>
                <p>
                  <Link href="/">
                    <a>메인으로 돌아가기</a>
                  </Link>
                </p>
              </DeprecatedNotice>
            </div>
          </Container>
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
  ]
  return { data: json }
}

export default Videos
