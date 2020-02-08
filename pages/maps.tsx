import React, { useEffect } from 'react'
import Layout from '../layouts/main'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Maps = ({ data, version }): JSX.Element => {
  return (
    <Layout version={version}>
      <Map movements={data} />
    </Layout>
  )
}

Maps.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/movements/?format=json`)
  const json = await res.json()
  const version = await fetch(`${process.env.API_URL}/versions/?format=json`)
  const verJson = await version.json()
  return { data: json, version: verJson[0].version }
}

export default Maps
