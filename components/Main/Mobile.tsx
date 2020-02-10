import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import Container from '../Container'
import Card from '../Card'
import StatCard from '../StatCard'
const Map = dynamic(() => import('../Map'), { ssr: false })
const StatTable = dynamic(() => import('./StatTable'))

const MapContainer = styled.section`
  padding: 20px 10px;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    padding-left: 6px;
  }
`

const MainMobile = ({ report, markerData }): JSX.Element => {
  return (
    <>
      <Container>
        <div className="row">
          <Map movements={markerData} />
          <div className="col-md-5">
            <MapContainer>
              <div className="row">
                <div
                  className="col-md-4"
                  style={{
                    marginBottom: '15px',
                  }}
                >
                  <StatCard title="국내 확진자 수" content={report.total_count} />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    marginBottom: '15px',
                  }}
                >
                  <StatCard title="국내 치료자 수" content={report.cure_count} />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    marginBottom: '25px',
                  }}
                >
                  <StatCard title="국내 사망자 수" content={report.death_count} />
                </div>
              </div>
              <Card>
                <StatTable report={report} />
              </Card>
            </MapContainer>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MainMobile
