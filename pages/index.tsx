import React, { useEffect, useState } from 'react'
import Layout from '../layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'

const Home = ({ data }): JSX.Element => {
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
      const Mobile = dynamic(() => import('../components/Main/Mobile'))
      return <Mobile markerData={data} />
    } else {
      const Desktop = dynamic(() => import('../components/Main/Desktop'))
      return <Desktop markerData={data} />
    }
  }

  return <Layout>{checkRender()}</Layout>
}

Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/movements/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default Home
