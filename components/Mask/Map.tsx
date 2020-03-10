import React from 'react'
import { NaverMap, Polyline } from 'react-naver-maps'

const MaskMap = () => {
  return (
    <NaverMap
      mapDivId={'map'}
      style={{
        width: '100%',
        height: '100vh',
      }}
      defaultCenter={{ lat: 37.3213564, lng: 127.0978459 }}
      defaultZoom={8}
    ></NaverMap>
  )
}

export default MaskMap
