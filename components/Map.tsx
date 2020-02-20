import React, { useRef, useEffect, useState } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'

const naverMapClientId = process.env.NAVER_MAP_API || ''
declare global {
  interface Window {
    naver: any
  }
}

interface MapProps {
  movements: any
  height?: string
}

const Map: React.FC<MapProps> = ({ movements, height }): JSX.Element => {
  const navermaps = window.naver.maps
  return (
    <>
      <NaverMap
        mapDivId={'dash-map'} // default: react-naver-map
        style={{
          width: '100%',
          height: height || '40vh',
        }}
        defaultCenter={{ lat: 36.3213564, lng: 127.0978459 }}
        defaultZoom={6}
      >
        {movements.map((item, i) => {
          return (
            <Marker
              key={i}
              position={new navermaps.LatLng(item.lat, item.lng)}
              title={item.place}
            />
          )
        })}
      </NaverMap>
    </>
  )
}
const MapComponent = ({ movements }): JSX.Element => {
  if (window.naver.maps) {
    return <Map movements={movements} />
  }
}

export default MapComponent
