import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import Layout from '../../layouts/main'
import Container from '../Container'
const Map = dynamic(() => import('../Map'), { ssr: false })

const MainMobile = ({ markerData }): JSX.Element => {
  return (
    <>
      <Map movements={markerData} />
    </>
  )
}

export default MainMobile
