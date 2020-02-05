import React from 'react'
import Layout from '@/layouts/main'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

const Home: React.FC = () => {
  return (
    <Layout>
      <Map />
    </Layout>
  )
}

export default Home
