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
          height: '30vh',
        }}
        defaultCenter={{ lat: 36.3213564, lng: 127.0978459 }}
        defaultZoom={6}
      >
        {movements.map((item, i) => {
          const navermaps = window.naver.maps
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
const MapComponent = ({ movements }): JSX.Element => (
  <RenderAfterNavermapsLoaded ncpClientId={naverMapClientId}>
    <Map movements={movements} />
  </RenderAfterNavermapsLoaded>
)

export default MapComponent
