import React, { useState } from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'
import Jumbotron from '@/components/Jumbotron'
import MaskCard from '@/components/Mask/card'

const Mask = (): JSX.Element => {
  const [search, setSearch] = useState(false)
  if (typeof window !== 'undefined') {
    if (!navigator.geolocation) {
      setSearch(true)
    }
    const Infomation = (): JSX.Element => {
      if (search === true) {
        // 검색 페이지
      } else {
        return (
          <>
            <div></div>
            <div
              className="row"
              style={{
                padding: '20px 0',
              }}
            >
              <div className="col-md-6">
                <MaskCard />
              </div>
            </div>
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
        <div>
          해당 기능 (페이지)은(는) JavaScript를 지원하는 브라우저에서만 사용 가능합니다. 이용에
          불편을 드려 죄송합니다.
        </div>
      </>
    )
  }
}

export default Mask
