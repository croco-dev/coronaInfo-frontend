import React, { useState } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from '../layouts/main'
import Container from '../components/Container'
import fetch from 'isomorphic-unfetch'
import Jumbotron from '../components/Jumbotron'

const Background = styled.div`
  background: #f7f7f7;
`

const DataBox = styled.div`
  padding: 25px 0;
`

const CardBox = styled.div`
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 13px;
  margin: 25px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  line-height: 150%;
  @media (max-width: 992px) {
    margin: 17px 10px;
  }
  .cc-h {
    background: #e6e6e6;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
  }
  .cc-a {
    padding: 0 10px;
    div {
      display: flex;
    }
    .active {
      margin-left: auto;
      cursor: pointer;
      display: flex;
      align-items: center;
      svg {
        width: 23px;
        margin-right: 4px;
      }
    }
    .addtionalInfomation {
      display: block;
      padding: 0px 10px 20px 10px;
      .gray {
        color: gray;
      }
      table {
        width: 100%;
        td {
          padding: 12px 16px;
          border: 1px solid #dedede;
          &:nth-of-type(1) {
            font-weight: 500;
            width: 100px;
            text-align: center;
          }
        }
      }
    }
  }
  .head {
    margin: 20px 4px;
    background: #333;
    border-radius: 15px;
    color: #fff;
    padding: 5px 13px;
    &.w {
      background: #e0e0e0;
      color: #333;
    }
    &.b {
      background: #59aafd;
    }
    &.f {
      background: var(--main);
    }
    &.i {
      background: #1aa06f;
    }
    &.r {
      background: #e65555;
    }
    &.h {
      background: #e65555;
      display: flex;
      align-items: center;
      svg {
        fill: #fff;
        margin-right: 3px;
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`

const PatientsPage = ({ data }): JSX.Element => {
  const DataShow = (): JSX.Element => {
    return (
      <>
        <DataBox>
          <div className="row">
            {data.map((row, i) => {
              return (
                <div className="col-xs-12 col-md-6" key={i}>
                  <Card data={row} />
                </div>
              )
            })}
          </div>
        </DataBox>
      </>
    )
  }

  const Card = ({ data }): JSX.Element => {
    const [active, setActive] = useState(false)

    const changeActive = (): void => {
      active ? setActive(false) : setActive(true)
    }

    return (
      <>
        <CardBox>
          <div className="cc-h">
            <span>{data.index}</span>번째 확진자
          </div>
          <div className="cc-a">
            <div>
              {data.status === '확진 및 격리' && <div className="head f">{data.status}</div>}
              {data.status === '완치' && <div className="head b">{data.status}</div>}
              {data.status === '사망' && <div className="head r">{data.status}</div>}
              {data.second_infection && data.second_infection > 0 && (
                <div className="head i">2차 감염</div>
              )}
              {data.hospital && (
                <div className="head h">
                  <svg xmlns="http://www.w3.org/2000/svg" height="0.95rem" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 11h-3v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3H7c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h3V7c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1z" />
                  </svg>
                  {data.hospital}
                </div>
              )}
              <span className="active" onClick={changeActive}>
                {active ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" />
                  </svg>
                )}
              </span>
            </div>
            {active && (
              <>
                <div className="addtionalInfomation">
                  <table>
                    <tbody>
                      <tr>
                        <td>확진 날짜</td>
                        <td>
                          {data.date ? (
                            <span>{data.date}</span>
                          ) : (
                            <span className={'gray'}>정보 없음</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>성별</td>
                        <td>
                          {data.sex ? (
                            <span>{data.sex}</span>
                          ) : (
                            <span className={'gray'}>정보 없음</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>국적</td>
                        <td>
                          {data.country ? (
                            <span>{data.country}</span>
                          ) : (
                            <span className={'gray'}>정보 없음</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>나이</td>
                        <td>
                          {data.age ? (
                            <span>{data.age}</span>
                          ) : (
                            <span className={'gray'}>정보 없음</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>입원 병원</td>
                        <td>
                          {data.hospital ? (
                            <span>{data.hospital}</span>
                          ) : (
                            <span className={'gray'}>정보 없음</span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </CardBox>
      </>
    )
  }

  const DataLoading = (): JSX.Element => (
    <>
      <div
        style={{
          padding: '20px 0px',
          textAlign: 'center',
        }}
      >
        <p>데이터가 없습니다.</p>
      </div>
    </>
  )

  return (
    <>
      <Layout>
        <Head>
          <title>확진자 리스트 - 코로나인포 (CoronaInfo)</title>
        </Head>
        <Jumbotron
          title="확진자 리스트"
          desc="국내 코로나-19 확진자들의 정보와 상태를 한 눈에 확인하세요!"
        />
        <Background>
          {data && data.length > 0 ? (
            <>
              <Container>
                <DataShow />
              </Container>
            </>
          ) : (
            <DataLoading />
          )}
        </Background>
      </Layout>
    </>
  )
}

PatientsPage.getInitialProps = async (): Promise<object> => {
  const res = await fetch(`${process.env.API_URL}/patients/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default PatientsPage
