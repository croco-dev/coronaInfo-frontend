import React from 'react'
import Layout from '@/layouts/main'
import dynamic from 'next/dynamic'
const MapContainer = dynamic(() => import('@/components/Mask/Map'), {
  ssr: false,
})

const MaskMap = (): JSX.Element => {
  return (
    <>
      <Layout isFull={true} footer={false}>
        <MapContainer />
      </Layout>
    </>
  )
}

export default MaskMap
