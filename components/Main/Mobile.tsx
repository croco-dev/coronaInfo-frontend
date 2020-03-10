import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import React from 'react'
import Card from '../Card'
import Container from '../Container'

const MapChart = dynamic(() => import('@/components/Chart/Map'), { ssr: false })
const StatTable = dynamic(() => import('./StatTable'))

const MapContainer = styled.section`
  padding: 20px 10px;
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

const MarginBox = styled.div`
  margin-bottom: 20px;
`

const StatusItem = styled.div`
  text-align: center;
  h3 {
    font-size: 20px;
    font-weight: 600;
    &.total {
      color: var(--main);
    }
    &.cure {
      color: #33a77c;
    }
    &.death {
      color: #f24147;
    }
  }
`

const MainMobile = ({ report, location }): JSX.Element => {
  return (
    <>
      <Container>
        <div>
          <div>
            <MapContainer>
              <Card
                style={{
                  marginBottom: '20px',
                }}
              >
                <div className="row">
                  <StatusItem className="col-4">
                    <p>확진자</p>
                    <h3 className="total">{report.total_count.toLocaleString()}</h3>
                  </StatusItem>
                  <StatusItem className="col-4">
                    <p>격리 해제</p>
                    <h3 className="cure">{report.cure_count.toLocaleString()}</h3>
                  </StatusItem>
                  <StatusItem className="col-4">
                    <p>사망</p>
                    <h3 className="death">{report.death_count.toLocaleString()}</h3>
                  </StatusItem>
                </div>
              </Card>
              <MarginBox>
                <Card>
                  <h2>확진자 지도</h2>
                  <MapChart location={location} />
                </Card>
              </MarginBox>
              <Card>
                <h2>
                  통계 <span>(오늘 기준)</span>
                </h2>
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
