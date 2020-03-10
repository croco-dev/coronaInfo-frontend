import React from 'react'
import styled from '@emotion/styled'

const CardStyle = styled.div`
  display: block;
  padding: 20px 0;
  border-radius: 8px;
  padding: 20px;
  line-height: 1.5;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  border: 0;
  z-index: 101;
`

interface CardProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Card = ({ children, style }: CardProps): JSX.Element => {
  return (
    <>
      <CardStyle style={style}>{children}</CardStyle>
    </>
  )
}

export default Card
