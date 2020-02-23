import React from 'react'
import Head from 'next/head'
import Layout from '../layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
const Map = dynamic(() => import('../components/MapPolygon'), { ssr: false })

const Maps = ({ data }): JSX.Element => {
  return (
    <Layout isFull={true} footer={false}>
      <Head>
        <title>지도 - 코로나인포 (CoronaInfo)</title>
      </Head>
      <Map pdata={data} />
    </Layout>
  )
}

Maps.getInitialProps = async (): Promise<object> => {
  const res = await fetch(`${process.env.API_URL}/movements/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default Maps
