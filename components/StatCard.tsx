import React from 'react'
import styled from '@emotion/styled'
import Container from './Container'

const Card = styled.div`
  display: block;
  text-align: center;
  padding: 20px 0;
  border-radius: 8px;
  line-height: 1.6;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  z-index: 101;
  .d {
    font-weight: 500;
    font-size: 18px;
  }
  .n {
    font-weight: 700;
    font-size: 24px;
  }
  &.red {
    background: #ff7878;
    color: #fff;
  }
`

const StatCard = ({ title, content }): JSX.Element => {
  return (
    <>
      <Card>
        <p className="d">{title}</p>
        <p className="n">{content}</p>
      </Card>
    </>
  )
}

export default StatCard
