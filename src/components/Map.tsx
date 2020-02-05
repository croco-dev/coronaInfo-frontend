import React from 'react'
import { Map, Marker, MarkerClusterer } from 'react-kakao-maps'

const MapComponent: React.FC = () => {
  const cOptions = new kakao.maps.MarkerClusterer({
    averageCenter: true,
    minLevel: 10,
  })
  return (
    <>
      <div style={{ width: '100%', height: '450px' }}>
        <Map options={{ center: new kakao.maps.LatLng(37.5840928, 126.9666966), level: 11 }}>
          <MarkerClusterer options={cOptions}>
            <Marker
              options={{
                position: new kakao.maps.LatLng(33.450701, 126.570667),
              }}
            />
          </MarkerClusterer>
        </Map>
      </div>
    </>
  )
}

export default MapComponent
