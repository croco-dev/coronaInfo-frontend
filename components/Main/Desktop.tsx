import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import Container from '../Container'
import Card from '../Card'
import StatCard from '../StatCard'
const Map = dynamic(() => import('../Map'), { ssr: false })

const MapContainer = styled.section`
  padding: 20px 0;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }
`

const MainDesktop = ({ markerData }): JSX.Element => {
  return (
    <>
      <Container
        style={{
          padding: '20px 0',
        }}
      >
        <div className="row">
          <div className="col-md-4">
            <StatCard title="국내 확진자 수" content="100,000,000" />
          </div>
          <div className="col-md-4">
            <StatCard title="국내 치료자 수" content="100,000,000" />
          </div>
          <div className="col-md-4">
            <StatCard title="국내 사망자 수" content="100,000,000" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <MapContainer>
              <Card>
                <div className="t">
                  <h2>확진자 현황</h2>
                </div>
                <Map movements={markerData} />
              </Card>
            </MapContainer>
          </div>
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
        </div>
      </Container>
    </>
  )
}

export default MainDesktop
