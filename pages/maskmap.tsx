import React from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Polyline } from 'react-naver-maps'
import Layout from '@/layouts/main'

const MaskMap = (): JSX.Element => {
  return (
    <>
      <Layout>
        {window && (
          <NaverMap
            mapDivId={'dash-map'} // default: react-naver-map
            style={{
              width: '100%',
              height: '100vh',
            }}
            defaultCenter={{ lat: 37.3213564, lng: 127.0978459 }}
            defaultZoom={8}
          ></NaverMap>
        )}
      </Layout>
    </>
  )
}

export default MaskMap
