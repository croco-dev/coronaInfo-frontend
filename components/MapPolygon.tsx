import React, { useRef, useEffect } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Polygon } from 'react-naver-maps'

const naverMapClientId = process.env.NAVER_MAP_API || ''
declare const naver: any
declare global {
  interface Window {
    naver: any
  }
}

const Map = ({ pdata }): JSX.Element => {
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
        {pdata.map((item, i) => {
          const navermaps = window.naver.maps
          const paths = []
          pdata.movements.map((item2, i2) => {
            paths.push(new navermaps.LatLng(item2.lat, item2.lng))
          })
          return (
            <Polygon
              paths={[paths]}
              fillColor={'#ff0000'}
              fillOpacity={0.3}
              strokeColor={'#ff0000'}
              strokeOpacity={0.6}
              strokeWeight={3}
            />
          )
        })}
      </NaverMap>
    </>
  )
}
const MapComponent = ({ pdata }): JSX.Element => (
  <RenderAfterNavermapsLoaded ncpClientId={naverMapClientId}>
    <Map pdata={pdata} />
  </RenderAfterNavermapsLoaded>
)

export default MapComponent
