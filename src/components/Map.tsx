import React, { useState } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

const naverMapClientId = 'qp7da4lz69'

const Map: React.FC = () => {
  return (
    <RenderAfterNavermapsLoaded ncpClientId={naverMapClientId}>
      <NaverMap
        mapDivId={'coronaMap'} // default: react-naver-map
        style={{
          width: '100%',
          height: '40vh',
        }}
        defaultCenter={{ lat: 37.5840928, lng: 126.9666966 }}
        defaultZoom={8}
      />
    </RenderAfterNavermapsLoaded>
  )
}

export default Map
