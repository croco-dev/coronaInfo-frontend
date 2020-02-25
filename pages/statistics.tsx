import React from 'react'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import Layout from '@/layouts/main'
import Jumbotron from '@/components/Jumbotron'
import Container from '@/components/Container'
import Card from '@/components/Card'

const StatisticsPage = ({ data }): JSX.Element => {
  // const data = [
  //   {
  //     date: '2020-01-01',
  //     total: 1,
  //   },
  //   {
  //     date: '2020-01-02',
  //     total: 100,
  //   },
  //   {
  //     date: '2020-01-03',
  //     total: 2400,
  //   },
  // ]

  const DataGraph = ({ id, title, data, color }): JSX.Element => {
    const graphData = []
    let totalCount = 0

    data.forEach(item => {
      totalCount = totalCount + parseInt(item.total)
      graphData.push({
        date: item.date,
        total: totalCount,
      })
    })

    return (
      <Card>
        <h2>{title}</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={graphData}>
            <defs>
              <linearGradient id={'graphColor' + id.toUpperCase()} x1="0" y1="0" x2="0" y2="1">
                <stop offset="100%" stopColor={color} stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke={color} fillOpacity={0.6} fill={color} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    )
  }

  return (
    <>
      <NextSeo title="확진자 통계" />
      <Layout>
        <Jumbotron
          title="확진자 통계"
          desc="국내 코로나-19 확진자들의 정보들을 시각화 된 그래프로 확인하세요."
        />
        <ContentStyle>
          <Container>
            <div
              className="row"
              style={{
                marginBottom: '20px',
              }}
            >
              <div className={'col-md-12'}>
                <DataGraph
                  id={'total'}
                  title={'총 확진자 증가 추이'}
                  data={data.total_report}
                  color="#c361ff"
                />
              </div>
            </div>
            <div className="row">
              <div className={'col-sm-12 col-lg-6'}>
                <DataGraph
                  id={'cure'}
                  title={'격리해제 확진자 증가 추이'}
                  data={data.cure_report}
                  color="#43c595"
                />
              </div>
              <div className={'col-sm-12 col-lg-6'}>
                <DataGraph
                  id={'death'}
                  title={'사망자 증가 추이'}
                  data={data.death_report}
                  color="#f24147"
                />
              </div>
            </div>
          </Container>
        </ContentStyle>
      </Layout>
    </>
  )
}

StatisticsPage.getInitialProps = async (): Promise<object> => {
  const res = await fetch(`${process.env.API_URL}/report/patients/?format=json`)
  const json = await res.json()
  return { data: json }
}

const ContentStyle = styled.div`
  padding: 20px 0;
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
`

export default StatisticsPage
