import React from 'react'
import styled from '@emotion/styled'
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

const naverMapClientId = 'qp7da4lz69'

const Map: React.FC = () => {
  return (
    <RenderAfterNavermapsLoaded ncpClientId={naverMapClientId}>
      <NaverMap
        mapDivId={'coronaMap'} // default: react-naver-map
        style={{
          width: '100%',
          height: '500px',
        }}
        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  )
}

export default Map
