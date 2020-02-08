import React, { useEffect } from 'react'
import Layout from '../layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import ReactGA from 'react-ga'
const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Home = ({ data }): JSX.Element => {
  useEffect(() => {
    ReactGA.initialize('UA-158027501-01')
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <Layout>
      <Map movements={data} />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/movements/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default Home
