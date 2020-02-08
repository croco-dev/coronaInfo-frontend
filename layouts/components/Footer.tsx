import React from 'react'
import styled from '@emotion/styled'
import Emoji from '../../components/Emoji'

const StyledFooter = styled.footer`
  background: #dfecf7;
  text-align: center;
  padding: 25px 0;
  line-height: 2;
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        제보, 정정 요청은 이메일로 받습니다 <Emoji str="🙂" />
      </p>
      <p>admin@coronas.info</p>
      <p>
        <Emoji str="❤️" /> from Croco.
      </p>
    </StyledFooter>
  )
}

export default Footer
