import React, { useState } from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Jumbotron from '@/components/Jumbotron'
import MaskCard from '@/components/Mask/card'
import MaskSearch from '@/components/Mask/search'

const Mask = (): JSX.Element => {
  const [search, setSearch] = useState(false)
  if (process.browser) {
    if (!navigator.geolocation) {
      setSearch(true)
    }
    const Infomation = (): JSX.Element => {
      if (search === true) {
        // 검색 페이지
      } else {
        return (
          <>
            <div>
              <MaskSearch />
            </div>
            {/* <div
              className="row"
              style={{
                padding: '20px 0',
              }}
            >
              <div className="col-md-6">
                <MaskCard />
              </div>
            </div> */}
          </>
        )
      }
    }
    return (
      <>
        <Layout>
          <Jumbotron
            title="내 주변 마스크?"
            desc="내 주변에서 마스크를 어디서 구할 수 있는지에 대해 간단히 알아보실 수 있습니다."
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
        <Layout>
          <Jumbotron
            title="내 주변 마스크?"
            desc="내 주변에서 마스크를 어디서 구할 수 있는지에 대해 간단히 알아보실 수 있습니다."
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
