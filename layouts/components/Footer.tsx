import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Emoji from '../../components/Emoji'
import fetch from 'isomorphic-unfetch'

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

const Footer = (): JSX.Element => {
  const [version, setVersion] = useState('')
  useEffect(() => {
    fetchData()
    async function fetchData(): Promise<void> {
      const version = await fetch(`${process.env.API_URL}/versions/?format=json`)
      const verJson = await version.json()
      return setVersion(verJson[0].version)
    }
  }, [])
  return (
    <StyledFooter>
      <div>
        <p>
          admin@coronas.info / 제보, 정정 요청은 이메일로 받습니다 <Emoji str="🙂" />
        </p>
        <p>
          <Emoji str="🧠" /> Last updated: {version}
        </p>
        <p>
          <Emoji str="❤️" /> from Croco.
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer
