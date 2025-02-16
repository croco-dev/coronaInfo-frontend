import React, { useRef, useEffect } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Polyline } from 'react-naver-maps'
import randomColor from 'randomcolor'

declare global {
  interface Window {
    naver: any
  }
}

const Map = ({ pdata }): JSX.Element => {
  const data = {}
  pdata.map(item => {
    if (data.hasOwnProperty(item.index)) {
      data[item.index] = [...data[item.index], item]
    } else {
      data[item.index] = [item]
    }
  })
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
        {Object.keys(data).map(key => {
          const navermaps = window.naver.maps
          const color = randomColor()
          const paths = []
          data[key].map(item => {
            paths.push(new navermaps.LatLng(item.lat, item.lng))
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
              key={key}
            />
          )
        })}
      </NaverMap>
    </>
  )
}
const MapComponent = ({ pdata }): JSX.Element => {
  if (window.naver.maps) {
    return <Map pdata={pdata} />
  } else {
    return <p>Loading...</p>
  }
}
export default MapComponent
