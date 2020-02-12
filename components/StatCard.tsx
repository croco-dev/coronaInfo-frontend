import styled from '@emotion/styled'
import React from 'react'

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-radius: 8px;
  line-height: 1.6;
  background: #fff;
  border: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  z-index: 101;
  .a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin-left: 5px;
    svg {
      width: 45px;
    }
  }
  .b {
    margin-bottom: -3px;
    .d {
      font-weight: 500;
      font-size: 18px;
    }
    .n {
      font-weight: 700;
      font-size: 24px;
    }
  }
`

const StatCard = ({ icon, title, content }): JSX.Element => {
  return (
    <>
      <Card>
        <div className="a">{icon}</div>
        <div className="b">
          <p className="d">{title}</p>
          <p className="n">{content}</p>
        </div>
      </Card>
    </>
  )
}

export default StatCard
