import React, { useRef, useEffect } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'

const naverMapClientId = process.env.NAVER_MAP_API || ''
declare const naver: any
declare global {
  interface Window {
    naver: any
  }
}

const Map = ({ movements }): JSX.Element => {
  return (
    <>
      <NaverMap
        mapDivId={'dash-map'} // default: react-naver-map
        style={{
          width: '100%',
          height: '45vh',
        }}
        defaultCenter={{ lat: 37.3213564, lng: 127.0978459 }}
        defaultZoom={8}
      >
        {movements.map(item => {
          const navermaps = window.naver.maps
          return <Marker position={new navermaps.LatLng(item.lat, item.lng)} title={item.place} />
        })}
      </NaverMap>
    </>
  )
}
const MapComponent = ({ movements }): JSX.Element => (
  <RenderAfterNavermapsLoaded ncpClientId={naverMapClientId}>
    <Map movements={movements} />
  </RenderAfterNavermapsLoaded>
)

export default MapComponent
