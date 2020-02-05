import React from 'react'
import Layout from '@/layouts/main'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4d24d92cf4df933db98899f6ef50cdec&libraries=services,clusterer"
        />
      </Head>
      <Map />
    </Layout>
  )
}

export default Home
