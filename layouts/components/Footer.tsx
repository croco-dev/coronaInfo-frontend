import React from 'react'
import styled from '@emotion/styled'
import Emoji from '../../components/Emoji'

const StyledFooter = styled.footer`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-top: 1px solid #e4e4e4;
  text-align: center;
  padding: 25px 0;
  line-height: 2;
`

const Footer = ({ version }): JSX.Element => {
  return (
    <StyledFooter>
      <div>
        <p>
          제보, 정정 요청은 이메일로 받습니다 <Emoji str="🙂" />
        </p>
        <p>admin@coronas.info</p>
        <p>{version} 기준 정보입니다.</p>
        <p>
          <Emoji str="❤️" /> from Croco.
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer
