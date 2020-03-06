import React from 'react'
import styled from '@emotion/styled'
import Card from '@/components/Card'

const StyleSection = styled.div`
  line-height: 1.5;
  .name {
    font-size: 20px;
    font-weight: 600;
  }
`
const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main);
  border-radius: 24px;
  color: #fff;
  font-weight: 500;
  padding: 3px 15px;
  width: 70px;
  margin-bottom: 2px;
`

const Address = styled.span`
  color: #888;
`

const MaskCard = () => {
  return (
    <>
      <Card>
        <StyleSection>
          <Tag>약국</Tag>
          <h2 className="name">하늘약국</h2>
          <Address>서울시 중구 세종로 xxx</Address>
        </StyleSection>
      </Card>
    </>
  )
}

export default MaskCard
