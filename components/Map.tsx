import React, { useEffect, useRef } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
import styled from '@emotion/styled'

declare global {
  interface Window {
    naver: any
  }
  const naver: any
  const MarkerClustering: any
  const N: any
}

interface MapProps {
  movements: any
  height?: string
}

const MapWrapper = styled.div`
  .clusterMark {
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 26px;
    font-size: 12px;
    border-radius: 100%;
    color: white;
    text-align: center;
    font-weight: bold;
    background: rgba(195, 97, 255, 0.8);
    background-size: contain;
  }
`

class MapComponent extends React.Component<MapProps> {
  mapRef: any

  render(): JSX.Element {
    return (
      <MapWrapper>
        <NaverMap
          naverRef={ref => {
            this.mapRef = ref
          }}
          mapDivId={'dash-map'} // default: react-naver-map
          style={{
            width: '100%',
            height: '40vh',
          }}
          defaultCenter={{ lat: 36.3213564, lng: 127.0978459 }}
          defaultZoom={6}
        ></NaverMap>
      </MapWrapper>
    )
  }

  componentDidMount(): void {
    const markers = []
    this.props.movements.map((item, i) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(item.lat, item.lng),
        map: this.mapRef.instance,
      })
      markers.push(marker)
    })

    const htmlMarker1 = {
      content: '<div class="clusterMark"></div>',
      size: N.Size(40, 40),
      anchor: N.Point(20, 20),
    }

    const markerClustering = new MarkerClustering({
      minClusterSize: 1,
      maxZoom: 8,
      map: this.mapRef.instance,
      markers: markers,
      disableClickZoom: false,
      gridSize: 120,
      icons: [htmlMarker1],
      indexGenerator: [10],
      stylingFunction: function(clusterMarker, count) {
        clusterMarker._wrapper.firstChild.innerText = count
      },
    })
  }
}

export default MapComponent
