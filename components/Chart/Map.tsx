import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import SouthKoreaSvg from '../../maps/southKorea'
import { SVGMap } from 'react-svg-map'

const getLocationName = (event): string => {
  return event.target.attributes.name.value
}

const ChartMap = ({ location }): JSX.Element => {
  const createCSS = () => {
    let styles = ''

    location.forEach(item => {
      let color = ''
      if (item.total >= 1000) {
        color = '#FF6161'
      } else if (item.total >= 100) {
        color = '#FF7E7E'
      } else if (item.total >= 50) {
        color = '#FFB4B4'
      } else if (item.total >= 10) {
        color = '#FFD4D4'
      } else if (item.total >= 1) {
        color = '#FFEBEB'
      } else {
        color = '#FFF'
      }
      styles += `
        path[name='${item.name}'] {
          fill: ${color};
        }
      `
    })

    return css`
      ${styles}
    `
  }

  const ChartMapStyle = styled.div`
    @import 'react-svg-map/lib/index.css';
    padding: 20px;
    width: 350px;
    margin: 0 auto;
    @media (max-width: 992px) {
      width: 100%;
    }
    .map__tooltip {
      position: fixed;
      min-width: 130px;
      padding: 10px 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.29);
      border-radius: 8px;
      background-color: white;
      text-align: center;
      .total {
        font-size: 17px;
        font-weight: 500;
      }
    }
    path {
      stroke: #a2a2a2;
      stroke-width: 1px;
    }
    ${createCSS()};
  `

  const [pointedLocation, setPointedLocation] = useState(null)
  const [tooltipStyle, setTooltipStyle] = useState({ display: 'none' })
  const mouseOver = event => {
    const pointedLocation = getLocationName(event)
    setPointedLocation(pointedLocation)
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

  // 툴팁 내부 정보 처리
  const [locationData, setLocationData] = useState({ id: 0, name: '', total: 0, increase: 0 })
  useEffect(() => {
    const findData = location.find(d => {
      return d.name === pointedLocation
    })
    setLocationData(findData)
  }, [location, pointedLocation])

  const Tooltip = (): JSX.Element => {
    if (locationData) {
      return (
        <>
          <div className="map__tooltip" style={tooltipStyle}>
            <p>{locationData.name}</p>
            <p className="total">{locationData.total.toLocaleString()}명</p>
          </div>
        </>
      )
    } else {
      return <></>
    }
  }

  return (
    <ChartMapStyle>
      <SVGMap
        map={SouthKoreaSvg}
        onLocationMouseOver={mouseOver}
        onLocationMouseOut={handleLocationMouseOut}
        onLocationMouseMove={handleLocationMouseMove}
      />
      <Tooltip />
    </ChartMapStyle>
  )
}

export default ChartMap
