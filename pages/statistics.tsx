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

  let graphData = []
  let totalCount = 0

  data.total_report.forEach(item => {
    totalCount = totalCount + parseInt(item.total)
    graphData.push({
      date: item.date,
      total: totalCount,
    })
  })

  console.log(graphData)

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
            <div className="row">
              <div className={'col-md-12'}>
                <Card>
                  <ResponsiveContainer width="100%" aspect={4.0 / 1.0}>
                    <AreaChart data={graphData}>
                      <defs>
                        <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                      <Tooltip label="asd" />
                      <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorCount)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card>
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
  background: #fff;
  padding: 20px 0;
`

export default StatisticsPage
