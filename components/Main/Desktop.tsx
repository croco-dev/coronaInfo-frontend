import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import Container from '../Container'
import Card from '../Card'
import StatCard from '../StatCard'
const Map = dynamic(() => import('../Map'), { ssr: false })
const StatTable = dynamic(() => import('./StatTable'))

const MapContainer = styled.section`
  padding: 20px 0;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    padding-left: 6px;
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
            <StatCard title="국내 확진자 수" content={report.total_count} />
          </div>
          <div className="col-md-4">
            <StatCard title="국내 확진자 격리해제 수" content={report.cure_count} />
          </div>
          <div className="col-md-4">
            <StatCard title="국내 사망자 수" content={report.death_count} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <MapContainer>
              <Card>
                <div className="t">
                  <h2>확진자 현황</h2>
                </div>
                <Map movements={markerData} />
              </Card>
            </MapContainer>
          </div>
          <div className="col-md-5">
            <MapContainer>
              <Card>
                <div className="t">
                  <h2>감염 통계</h2>
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
