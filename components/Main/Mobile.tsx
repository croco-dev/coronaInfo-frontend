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
  }
  .change {
    font-size: 13px;
    &.up {
      color: #1bbf83;
    }
    &.down {
      color: #f24147;
    }
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
              <Card>
                <StatTable>
                  <tr>
                    <td>
                      <h4>국내 확진자</h4>
                      <p className="change down">{report.total_count}</p>
                    </td>
                    <td>
                      <h4>국내 치료자</h4>
                      <p className="change up">{report.cure_count} </p>
                    </td>
                    <td>
                      <h4>국내 사망자</h4>
                      <p className="change down">{report.death_count}</p>
                    </td>
                  </tr>
                </StatTable>
                <StatTable>
                  <tr>
                    <td>
                      <h4>증가비율</h4>
                      <p className={report.increase_rate > 0 ? 'change up' : 'change down'}>
                        {report.increase_rate}%
                      </p>
                    </td>
                    <td>
                      <h4>2차 감염 비율</h4>
                      <p className={report.increase_rate > 0 ? 'change up' : 'change down'}>
                        {report.increase_rate}%
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>사망자 비율</h4>
                      <p className={report.death_rate >= 0 ? 'change up' : 'change down'}>
                        {report.death_rate}%
                      </p>
                    </td>
                    <td>
                      <h4>완치자 비율</h4>
                      <p className={report.cure_rate > 0 ? 'change up' : 'change down'}>
                        {report.cure_rate}%
                      </p>
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

export default MainMobile
