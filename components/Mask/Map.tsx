import React from 'react'
import { NaverMap, Marker } from 'react-naver-maps'
import styled from '@emotion/styled'

declare global {
  interface Window {
    naver: any
  }
  const naver: any
  const MarkerClustering: any
  const N: any
}

const MapContainer = styled.div`
  display: block;
`

class MaskMap extends React.Component {
  mapRef: any

  render(): JSX.Element {
    return (
      <MapContainer>
        <NaverMap
          naverRef={ref => {
            this.mapRef = ref
          }}
          mapDivId={'dash-map'} // default: react-naver-map
          style={{
            width: '100%',
            height: '100vh',
          }}
          defaultCenter={{ lat: 36.3213564, lng: 127.0978459 }}
          defaultZoom={17}
        ></NaverMap>
      </MapContainer>
    )
  }

  componentDidMount(): void {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.mapRef.instance.setCenter(
          new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
        )
        new naver.maps.Marker({
          position: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: this.mapRef.instance,
        })
      },
      err => {
        console.log(err)
      },
    )
  }
}

export default MaskMap
