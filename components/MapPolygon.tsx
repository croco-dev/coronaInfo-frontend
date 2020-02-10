import React, { useRef, useEffect } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Polyline } from 'react-naver-maps'
import randomColor from 'randomcolor'

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
          height: '100vh',
        }}
        defaultCenter={{ lat: 37.3213564, lng: 127.0978459 }}
        defaultZoom={8}
      >
        {pdata.map((item, i) => {
          const navermaps = window.naver.maps
          const color = randomColor()
          const paths = []
          item.movements.map((item2, i2) => {
            paths.push(new navermaps.LatLng(item2.lat, item2.lng))
          })
          return (
            <Polyline
              path={paths}
              strokeColor={color}
              strokeStyle={'solid'}
              strokeOpacity={0.8}
              strokeWeight={3}
              strokeLineCap="round"
              startIcon={3}
              endIcon={3}
              key={i}
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
