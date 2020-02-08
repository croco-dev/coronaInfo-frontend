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
    padding-left: 6px;
  }
`

const StatTable = styled.table`
  width: 100%;
  text-align: center;
  td {
    padding: 10px 20px;
    border: 1px solid #e6e6e6;
  }
  h4 {
    font-size: 15px;
    margin-bottom: 3px;
  }
  .data {
    font-weight: 500;
    font-size: 24px;
  }
  .change {
    font-size: 13px;
    &.up {
      color: blue;
    }
    &.down {
      color: red;
    }
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
                  <h2>감염 통계</h2>
                </div>
                <StatTable>
                  <tr>
                    <td>
                      <h4>증가비율</h4>
                      <p className="data">99.15%</p>
                      <p className={'change up'}>▲ 0.35%p</p>
                    </td>
                    <td>
                      <h4>2차 감염 비율</h4>
                      <p className="data">99.15%</p>
                      <p className={'change down'}>▼ 0.35%p</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>사망자 비율</h4>
                      <p className="data">99.15%</p>
                      <p className={'change down'}>▼ 0.35%p</p>
                    </td>
                    <td>
                      <h4>완치자 비율</h4>
                      <p className="data">99.15%</p>
                      <p className={'change up'}>▲ 0.35%p</p>
                    </td>
                  </tr>
                </StatTable>
              </Card>
            </MapContainer>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MainDesktop
