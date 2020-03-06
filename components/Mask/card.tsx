import React from 'react'
import styled from '@emotion/styled'
import Card from '@/components/Card'

const StyleSection = styled.div`
  .name {
    font-size: 20px;
  }
`

const MaskCard = () => {
  return (
    <>
      <Card>
        <StyleSection>
          <h2 className="name">하늘약국</h2>
        </StyleSection>
      </Card>
    </>
  )
}

export default MaskCard
