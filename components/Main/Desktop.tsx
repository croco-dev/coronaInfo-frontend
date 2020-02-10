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
    border: 0;
  }
  h4 {
    font-size: 15px;
    margin-bottom: 3px;
  }
  .data {
    font-weight: 500;
    font-size: 24px;
    &.up {
      color: #1bbf83;
    }
    &.down {
      color: #f24147;
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
            <StatCard title="국내 확진자 수" content={report.total_count} />
          </div>
          <div className="col-md-4">
            <StatCard title="국내 치료자 수" content={report.cure_count} />
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
                <StatTable>
                  <tbody>
                    <tr>
                      <td>
                        <h4>증가비율</h4>
                        <p className={report.increase_rate > 0 ? 'data up' : 'data down'}>
                          {report.increase_rate}%
                        </p>
                      </td>
                      <td>
                        <h4>2차 감염 비율</h4>
                        <p className={report.second_rate > 0 ? 'data up' : 'data down'}>
                          {report.second_rate}%
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>사망자 비율</h4>
                        <p className={report.death_rate >= 0 ? 'data up' : 'data down'}>
                          {report.death_rate}%
                        </p>
                      </td>
                      <td>
                        <h4>완치자 비율</h4>
                        <p className={report.cure_rate > 0 ? 'data up' : 'data down'}>
                          {report.cure_rate}%
                        </p>
                      </td>
                    </tr>
                  </tbody>
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
