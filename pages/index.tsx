import React, { useEffect, useState } from 'react'
import Layout from '@/layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import { NextSeo } from 'next-seo'

import Desktop from '@/components/Main/Desktop'

const Home = ({ location, report }): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false) // 모바일 여부
  const resizeEvent = (): void => {
    if (window.innerWidth < 992) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      resizeEvent()
      window.addEventListener('resize', resizeEvent)
      return (): void => {
        window.removeEventListener('resize', resizeEvent)
      }
    }
  }, [])

  const checkRender = (): JSX.Element => {
    if (isMobile) {
      const Mobile = dynamic(() => import('@/components/Main/Mobile'))
      return <Mobile report={report} location={location} />
    } else {
      return <Desktop report={report} location={location} />
    }
  }

  return (
    <>
      <NextSeo
        description={
          '코로나-19 (COVID-19, nCoV-19) 정보를 한 눈에 확인하세요. / 확진자: ' +
          report.total_count.toLocaleString() +
          '명 / 격리해제 확진자: ' +
          report.cure_count.toLocaleString() +
          '명 / 사망자: ' +
          report.death_count.toLocaleString() +
          '명'
        }
      />
      <Layout>{checkRender()}</Layout>
    </>
  )
}

Home.getInitialProps = async (): Promise<object> => {
  const report = await fetch(`${process.env.API_URL}/reports/?format=json`)
  const location = await fetch(`${process.env.API_URL}/reports/location/?format=json`)
  const reportJson = await report.json()
  const locationJson = await location.json()
  return { report: reportJson, location: locationJson }
}

export default Home
