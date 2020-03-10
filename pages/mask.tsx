import React, { useState } from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Jumbotron from '@/components/Jumbotron'
import MaskCard from '@/components/Mask/card'
// import MaskSearch from '@/components/Mask/search'
import { NextSeo } from 'next-seo'

const Callout = styled.div`
  padding: 20px 25px;
  background: #feeff2;
  line-height: 1.7;
  color: #3e4042;
  margin: 20px;
  h3 {
    color: #ca4545;
    font-size: 20px;
    font-weight: bold;
  }
`

const Select = styled.select`
  -webkit-appearance: none;
  font-size: 0.95rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 7px 20px;
  margin-top: 20px;
  cursor: pointer;
`

const AgreeInfomation = styled.div`
  background: #fff;
  line-height: 1.6;
  padding: 20px 25px;
  margin: 25px 0;
  border: 1px solid #e4e4e4;
  border-top: 5px solid #c361ff;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  ul {
    margin-top: 10px;
    margin-left: 20px;
  }
  b {
    font-weight: bold;
  }
  button {
    -webkit-appearance: none;
    margin-top: 15px;
    font-size: 0.95rem;
    border: 0;
    background: var(--main);
    padding: 7px 23px;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
  }
`

const SelectDistanceBlock = styled.div`
  label {
    margin-right: 6px;
  }
`

const Mask = (): JSX.Element => {
  const [start, setStart] = useState(false) // 시작 여부
  const [err, setErr] = useState('NONE')
  const [search, setSearch] = useState(false) // 검색이 필요한가요?
  const [data, setData] = useState([]) // 검색 반환 데이터

  const [showDistance, setShowDistance] = useState(1000)

  const dataLoading = async (lat, lng, dis = 1000) => {
    const fetchData = await fetch(
      'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=' +
        lat +
        '&lng=' +
        lng +
        '&m=' +
        dis,
    )
    const jsonData = await fetchData.json()
    setData(jsonData.stores)
  }

  const loadOperation = (dis = 1000) => {
    if (!navigator.geolocation) {
      setSearch(true)
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          dataLoading(position.coords.latitude, position.coords.longitude, dis)
        },
        err => {
          console.log(err)
          if (err.code == err.PERMISSION_DENIED) {
            setErr('DENY_PERMISSION')
          }
        },
      )
    }
  }

  const changeDistance = (e): void => {
    setShowDistance(e.target.value)
    const action = (): void => {
      loadOperation(e.target.value)
    }

    // 사용자 기기 걱정
    if (
      e.target.value >= 3000 &&
      window.confirm(
        '주변에 약국이 많은 지역에서는 3km 이상의 검색은 비권장합니다.\n계속하겠습니까?',
      )
    ) {
      action()
    } else {
      action()
    }
  }

  if (process.browser) {
    const Infomation = (): JSX.Element => {
      if (search === true) {
        // 검색 페이지
      } else {
        return (
          <>
            <div className="row">
              <SelectDistanceBlock className="col-md-12">
                <label htmlFor="selectDistance">검색 거리: </label>
                <Select id="selectDistance" value={showDistance} onChange={changeDistance}>
                  <option value={500}>500m</option>
                  <option value={1000}>1km</option>
                  <option value={2000}>2km</option>
                  <option value={3000}>3km</option>
                  <option value={4000}>4km</option>
                  <option value={5000}>5km</option>
                </Select>
              </SelectDistanceBlock>
            </div>
            <div
              className="row"
              style={{
                padding: '20px 0',
              }}
            >
              {data && data.length > 0 && (
                <>
                  {data.map((item, i) => {
                    if (item.remain_stat !== null) {
                      return (
                        <div className="col-md-6" key={i} style={{ marginBottom: '15px' }}>
                          <MaskCard data={item} />
                        </div>
                      )
                    }
                  })}
                </>
              )}
            </div>
          </>
        )
      }
    }
    return (
      <>
        <NextSeo title="마스크 재고 현황" />
        <Layout>
          <Jumbotron
            title="마스크 재고 현황 (베타)"
            desc="내 위치 기준으로 마스크를 구입할 수 있는 곳은 어딨을까요?"
          />
          <Container>
            {err === 'DENY_PERMISSION' && (
              <>
                <Callout>
                  <h3>위치를 받아올 수 없습니다.</h3>
                  <p>위치 권한이 수락되지 않았습니다.</p>
                </Callout>
              </>
            )}
            {start ? (
              <Infomation />
            ) : (
              <>
                <Container>
                  <AgreeInfomation>
                    <h2>사용 전 읽어주세요.</h2>
                    <ul>
                      <li>
                        <b>
                          제공되는 데이터는 실시간이 아니며, 5분 이상의 차이가 있을 수 있습니다.
                        </b>
                      </li>
                      <li>
                        <b>정보 업데이트 시각</b>을 기준으로 현명한 판단 바랍니다.
                      </li>
                      <li>
                        실제 재고와는 차이가 있기 때문에, 해당 데이터를 신뢰하지는 마시기 바랍니다.
                      </li>
                      <li>해당 데이터로 인하여 생기는 피해는 책임지지 않습니다.</li>
                    </ul>
                    <button
                      onClick={(): void => {
                        setStart(true)
                        loadOperation()
                      }}
                    >
                      확인했습니다.
                    </button>
                  </AgreeInfomation>
                </Container>
              </>
            )}
          </Container>
        </Layout>
      </>
    )
  } else {
    return (
      <>
        <NextSeo title="마스크 재고 현황" />
        <Layout>
          <Jumbotron
            title="마스크 재고 현황 (베타)"
            desc="내 위치 기준으로 마스크를 구입할 수 있는 곳은 어딨을까요?"
          />
          <Container>
            <div>해당 기능은 JavaScript가 켜져 있어야 이용 가능합니다.</div>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Mask
