import React from 'react'
import { Map, Marker, MarkerClusterer, Polyline } from 'react-kakao-maps'

const MapComponent: React.FC = () => {
  return (
    <>
      <div style={{ width: '100%', height: '450px' }}>
        <Map options={{ center: new kakao.maps.LatLng(37.5840928, 126.9666966), level: 11 }}></Map>
      </div>
    </>
  )
}

export default MapComponent
