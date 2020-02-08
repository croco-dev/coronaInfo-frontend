import React, { useEffect } from 'react'
import Layout from '../layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Maps = ({ data }): JSX.Element => {
  return (
    <Layout>
      <Map movements={data} />
    </Layout>
  )
}

Maps.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/movements/?format=json`)
  const json = await res.json()
  return { data: json }
}

export default Maps
