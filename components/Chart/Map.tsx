import React, { useState } from 'react'
import styled from '@emotion/styled'

import SouthKoreaSvg from '../../maps/southKorea'
import { SVGMap } from 'react-svg-map'

const ChartMapStyle = styled.div`
  @import 'react-svg-map/lib/index.css';
  padding: 20px;
  width: 350px;
  margin: 0 auto;
  .map__tooltip {
    position: fixed;
    width: 130px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.29);
    border-radius: 8px;
    background-color: white;
  }
`

const getLocationName = event => {
  return event.target.attributes.name.value
}

const ChartMap = (): JSX.Element => {
  const [pointedLocation, setPointedLocation] = useState(null)
  const [tooltipStyle, setTooltipStyle] = useState({ display: 'none' })
  const mouseOver = event => {
    const pointedLocation = getLocationName(event)
    setPointedLocation(pointedLocation)
    console.log(pointedLocation)
  }

  const handleLocationMouseMove = event => {
    const tooltipStyle = {
      display: 'block',
      top: event.clientY + 10,
      left: event.clientX - 100,
    }
    setTooltipStyle(tooltipStyle)
  }

  const handleLocationMouseOut = () => {
    setPointedLocation(null)
    setTooltipStyle({ display: 'none' })
  }

  return (
    <ChartMapStyle>
      <SVGMap
        map={SouthKoreaSvg}
        onLocationMouseOver={mouseOver}
        onLocationMouseOut={handleLocationMouseOut}
        onLocationMouseMove={handleLocationMouseMove}
      />
      <div className="map__tooltip" style={tooltipStyle}>
        {pointedLocation}
      </div>
    </ChartMapStyle>
  )
}

export default ChartMap
