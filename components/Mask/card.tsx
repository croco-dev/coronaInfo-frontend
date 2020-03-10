import React, { useState } from 'react'
import styled from '@emotion/styled'
import Card from '@/components/Card'

// const calDistance = (lat1, lng1, lat2, lng2) => {
//   const deg2rad = deg => {
//     return deg * (Math.PI / 180)
//   }

//   const R = 6371 // Radius of the earth in km
//   const dLat = deg2rad(lat2 - lat1) // deg2rad below
//   const dLon = deg2rad(lng2 - lng1)
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
//   const d = R * c // Distance in km
//   return d
// }

const StyleSection = styled.div`
  line-height: 1.5;
  .gray {
    color: gray;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
    span {
      margin-left: 8px;
      font-size: 14px;
    }
  }
  .openBtn {
    width: 30px;
    float: right;
  }
  table {
    width: 100%;
    td {
      padding: 12px 16px;
      border: 1px solid #dedede;
      &:nth-of-type(1) {
        font-weight: 500;
        width: 130px;
        text-align: center;
      }
    }
  }
  .infomation {
    margin-top: 20px;
  }
  .mapLink {
    margin-top: 15px;
    a {
      display: block;
      background: #fae000;
      color: #1d1d1d;
      text-decoration: none;
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
      &.naver {
        background: rgb(3, 207, 93);
      }
    }
  }
`
const Tag = styled.span`
  display: inline-block;
  border-radius: 24px;
  color: #fff;
  font-weight: 500;
  padding: 3px 30px;
  margin-bottom: 2px;

  &.plenty {
    background: #00a769;
  }
  &.some {
    background: #d2950e;
  }
  &.few {
    background: #de2e2e;
  }
  &.empty {
    background: #6b6b6b;
  }
`

const Address = styled.span`
  color: #888;
`

const MaskCard = ({ data }) => {
  const [open, setOpen] = useState(false)

  const changeOpen = (): void => {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <>
      <Card>
        <StyleSection>
          <span className="openBtn" onClick={changeOpen}>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" />
              </svg>
            )}
          </span>
          {data.remain_stat === 'plenty' && (
            <>
              <Tag className="plenty">넉넉 (100개 이상)</Tag>
            </>
          )}
          {data.remain_stat === 'some' && (
            <>
              <Tag className="some">조금 (30~100)</Tag>
            </>
          )}
          {data.remain_stat === 'few' && (
            <>
              <Tag className="few">부족 (2~30)</Tag>
            </>
          )}
          {data.remain_stat === 'empty' && (
            <>
              <Tag className="empty">없음 (1개 이하)</Tag>
            </>
          )}
          <h2 className="name">
            {data.name}
            {data.type === '01' && <span className="one">(약국)</span>}
            {data.type === '02' && <span className="two">(우체국)</span>}
            {data.type === '03' && <span className="three">(농협)</span>}
          </h2>
          <Address>{data.addr}</Address>
          {open === true && (
            <>
              <div className="infomation">
                <table>
                  <tbody>
                    <tr>
                      <td>최근 입고</td>
                      <td>
                        {data.stock_at ? (
                          <span>{data.stock_at}</span>
                        ) : (
                          <span className={'gray'}>정보 없음</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>재고 상태</td>
                      <td>
                        {data.remain_stat ? (
                          <span>
                            {data.remain_stat === 'plenty' && (
                              <>
                                <span className="green">100개 이상</span>
                              </>
                            )}
                            {data.remain_stat === 'some' && (
                              <>
                                <span className="yellow">30~100</span>
                              </>
                            )}
                            {data.remain_stat === 'few' && (
                              <>
                                <span className="red">2~30</span>
                              </>
                            )}
                            {data.remain_stat === 'empty' && (
                              <>
                                <span className="gray">1개 미만</span>
                              </>
                            )}
                          </span>
                        ) : (
                          <span className={'gray'}>정보 없음</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>정보 업데이트</td>
                      <td>
                        {data.created_at ? (
                          <span>{data.created_at}</span>
                        ) : (
                          <span className={'gray'}>정보 없음</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mapLink row">
                  <a
                    href={
                      'https://map.kakao.com/link/map/' +
                      encodeURIComponent(data.name) +
                      ',' +
                      data.lat +
                      ',' +
                      data.lng
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-md-6 col-xs-12"
                  >
                    카카오맵
                  </a>
                  <a
                    href={
                      'https://maps.naver.com/?menu=location&lat=' +
                      data.lat +
                      '&lng=' +
                      data.lng +
                      '&dlevel=14'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-md-6 col-xs-12 naver"
                  >
                    네이버 지도
                  </a>
                </div>
              </div>
            </>
          )}
        </StyleSection>
      </Card>
    </>
  )
}

export default MaskCard
