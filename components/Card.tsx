import React from 'react'
import styled from '@emotion/styled'

const CardStyle = styled.div`
  display: block;
  padding: 20px 0;
  border-radius: 8px;
  padding: 20px;
  line-height: 1.5;
  background: #fff;
  box-shadow: 0px 20px 40px 0 rgba(0, 0, 0, 0.14);
  border: 0;
  z-index: 101;
`

const Card = ({ children }): JSX.Element => {
  return (
    <>
      <CardStyle>{children}</CardStyle>
    </>
  )
}

export default Card
