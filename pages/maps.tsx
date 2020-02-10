import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
const Map = dynamic(() => import('../components/MapPolygon'), { ssr: false })

const Maps = ({ data }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>지도 - 코로나인포 (CoronaInfo)</title>
      </Head>
      <Map pdata={data} />
    </Layout>
  )
}

Maps.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/patients/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default Maps
