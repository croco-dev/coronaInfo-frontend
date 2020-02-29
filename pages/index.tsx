import React, { useEffect, useState } from 'react'
import Layout from '@/layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import { NextSeo } from 'next-seo'

import Desktop from '@/components/Main/Desktop'

const Home = ({ data, report }): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false) // 모바일 여부
  const resizeEvent = () => {
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
      return () => {
        window.removeEventListener('resize', resizeEvent)
      }
    }
  }, [])

  const checkRender = () => {
    if (isMobile) {
      const Mobile = dynamic(() => import('@/components/Main/Mobile'))
      return <Mobile report={report} markerData={data} />
    } else {
      return <Desktop report={report} markerData={data} />
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

Home.getInitialProps = async () => {
  const report = await fetch(`${process.env.API_URL}/reports/?format=json`)
  const dataJson = await res.json()
  const reportJson = await report.json()
  return { data: dataJson, report: reportJson }
}

export default Home
