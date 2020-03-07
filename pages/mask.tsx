import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Jumbotron from '@/components/Jumbotron'
import MaskCard from '@/components/Mask/card'
import MaskSearch from '@/components/Mask/search'
import { NextSeo } from 'next-seo'

const Mask = (): JSX.Element => {
  const [search, setSearch] = useState(false)
  const [data, setData] = useState([])

  const dataLoading = async (lat, lng) => {
    const fetchData = await fetch(
      'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=' +
        lat +
        '&lng=' +
        lng +
        '&m=1000',
    )
    const jsonData = await fetchData.json()
    setData(jsonData.stores)
  }

  const loadOperation = () => {
    if (!navigator.geolocation) {
      setSearch(true)
    } else {
      navigator.geolocation.getCurrentPosition(function(position) {
        dataLoading(position.coords.latitude, position.coords.longitude)
      })
    }
  }

  useEffect(() => {
    loadOperation()
  }, [])

  if (process.browser) {
    const Infomation = (): JSX.Element => {
      if (search === true) {
        // 검색 페이지
      } else {
        return (
          <>
            {/* <div>
              <MaskSearch />
            </div> */}
            <div
              className="row"
              style={{
                padding: '20px 0',
              }}
            >
              {data && data.length > 0 ? (
                <>
                  {data.map((item, i) => {
                    return (
                      <div className="col-md-6" key={i} style={{ marginBottom: '15px' }}>
                        <MaskCard data={item} />
                      </div>
                    )
                  })}
                </>
              ) : (
                <div className={'col-md-12'} style={{ textAlign: 'center' }}>
                  Loading...
                </div>
              )}
            </div>
          </>
        )
      }
    }
    return (
      <>
        <NextSeo title="마스크 어디에?" />
        <Layout>
          <Jumbotron
            title="마스크 어디에?"
            desc="내 반경 1km 이내에서 마스크를 구할 수 있는 곳을 찾습니다."
          />
          <Container>
            <Infomation />
          </Container>
        </Layout>
      </>
    )
  } else {
    return (
      <>
        <NextSeo title="마스크 어디에?" />
        <Layout>
          <Jumbotron
            title="마스크 어디에?"
            desc="내 반경 1km 이내에서 마스크를 구할 수 있는 곳을 찾습니다."
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
