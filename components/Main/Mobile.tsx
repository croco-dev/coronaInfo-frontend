import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import React from 'react'
import Card from '../Card'
import Container from '../Container'
import Link from 'next/link'

import { Icon, InlineIcon } from '@iconify/react'
import mapIcon from '@iconify/icons-ion/map'
import receiptIcon from '@iconify/icons-ion/receipt'
import personIcon from '@iconify/icons-ion/person'
import peopleSharp from '@iconify/icons-ion/people-sharp'

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

const QuickLink = styled.a`
  display: block;
  border-radius: 8px;
  padding: 20px 17px;
  color: #333;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  text-decoration: none;
  text-align: center;

  h3 {
    font-size: 16px;
    font-weight: 500;
  }
  svg {
    width: 28px;
    height: auto;
    margin-bottom: 10px;
    &.orange {
      color: #ff7800;
    }
    &.green {
      color: #13b363;
    }
    &.blue {
      color: #24a5ff;
    }
    &.red {
      color: #ff5454;
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
              <div
                className="row"
                style={{
                  marginBottom: '15px',
                }}
              >
                <div className="col-6" style={{ paddingLeft: '0' }}>
                  <Link href="/mask" passHref>
                    <QuickLink>
                      <Icon icon={mapIcon} className="blue" />
                      <h3>주변 마스크</h3>
                    </QuickLink>
                  </Link>
                </div>
                <div className="col-6" style={{ paddingRight: '0' }}>
                  <Link href="/statistics" passHref>
                    <QuickLink>
                      <Icon icon={personIcon} className="green" />
                      <h3>확진자 통계</h3>
                    </QuickLink>
                  </Link>
                </div>
              </div>
              <div
                className="row"
                style={{
                  marginBottom: '15px',
                }}
              >
                <div className="col-6" style={{ paddingLeft: '0' }}>
                  <Link href="/news" passHref>
                    <QuickLink>
                      <Icon icon={receiptIcon} className="red" />
                      <h3>실시간 뉴스</h3>
                    </QuickLink>
                  </Link>
                </div>
                <div className="col-6" style={{ paddingRight: '0' }}>
                  <Link href="/patients" passHref>
                    <QuickLink>
                      <Icon icon={peopleSharp} className="orange" />
                      <h3>확진자 목록</h3>
                    </QuickLink>
                  </Link>
                </div>
              </div>
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
