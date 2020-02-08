import React, { useRef, useEffect } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

const naverMapClientId = process.env.NAVER_MAP_API || ''
declare const naver: any

const MapComponent: React.FC = () => {
  return (
    <>
      <RenderAfterNavermapsLoaded ncpClientId={naverMapClientId}>
        <NaverMap
          mapDivId={'dash-map'} // default: react-naver-map
          style={{
            width: '100%',
            height: '45vh',
          }}
          defaultCenter={{ lat: 37.3213564, lng: 127.0978459 }}
          defaultZoom={8}
        />
      </RenderAfterNavermapsLoaded>
    </>
  )
}

export default MapComponent
