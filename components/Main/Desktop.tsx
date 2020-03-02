import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import React from 'react'
import Card from '../Card'
import Container from '../Container'
import StatCard from '../StatCard'

const MapChart = dynamic(() => import('@/components/Chart/Map'), { ssr: false })
const StatTable = dynamic(() => import('./StatTable'))

const MapContainer = styled.section`
  padding: 20px 0;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    padding-left: 6px;
    span {
      font-size: 15px;
    }
  }
`

const MainDesktop = ({ report, markerData }): JSX.Element => {
  return (
    <>
      <Container
        style={{
          padding: '20px 0',
        }}
      >
        <div className="row">
          <div className="col-md-4">
            <StatCard
              title="국내 확진자 수"
              content={report.total_count.toLocaleString()}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c361ff">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <circle cx="9" cy="8.5" opacity=".3" r="1.5" />
                  <path
                    d="M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"
                    opacity=".3"
                  />
                  <path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" />
                </svg>
              }
            />
          </div>
          <div className="col-md-4">
            <StatCard
              title="국내 확진자 격리해제 수"
              content={report.cure_count.toLocaleString()}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#43c595">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                    opacity=".3"
                  />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                </svg>
              }
            />
          </div>
          <div className="col-md-4">
            <StatCard
              title="국내 사망자 수"
              content={report.death_count.toLocaleString()}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f24147">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm6.95 9.5c-.7-1.19-1.97-2-3.45-2s-2.76.81-3.45 2H6.88C7.68 15.45 9.67 14 12 14s4.32 1.45 5.12 3.5h-1.67z"
                    opacity=".3"
                  />
                  <circle cx="15.5" cy="9.5" r="1.5" />
                  <circle cx="8.5" cy="9.5" r="1.5" />
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z" />
                </svg>
              }
            />
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: '17px',
          }}
        >
          <div className="col-md-12">
            <Card>
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                정보 업데이트 지연 안내
              </h2>
              <p
                style={{
                  lineHeight: 1.6,
                }}
              >
                현재 질병관리본부에서 '확진자 이동경로'를 업데이트하고 있지 않아, 데이터 수집에
                차질이 발생하고 있습니다.
                <br />
                <b
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  하단 카드들은
                </b>{' '}
                데이터가 정확하지 않은 점, 사과의 말씀 드립니다.
              </p>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <MapContainer>
              <Card>
                <div className="t">
                  <h2>확진자 지도</h2>
                </div>
                <MapChart />
              </Card>
            </MapContainer>
          </div>
          <div className="col-md-5">
            <MapContainer>
              <Card>
                <div className="t">
                  <h2>
                    감염 통계 <span>(오늘 기준)</span>
                  </h2>
                </div>
                <StatTable report={report} />
              </Card>
            </MapContainer>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MainDesktop
