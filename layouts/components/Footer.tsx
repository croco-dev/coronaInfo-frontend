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
  a {
    text-decoration: none;
    color: #194a7d;
  }
  .small {
    font-size: 90%;
  }
`

const Footer = (): JSX.Element => {
  const [version, setVersion] = useState('')
  useEffect(() => {
    fetchData()
    async function fetchData(): Promise<void> {
      const version = await fetch(`${process.env.API_URL}/versions/?format=json`)
      const verJson = await version.json()
      return setVersion(verJson[0].date)
    }
  }, [])
  return (
    <StyledFooter>
      <div>
        <p>
          제보, 정정 요청은 이메일로 받습니다 <Emoji str="🙂" /> <br />
          <span className="small">
            <Emoji str="📧" /> admin@coronas.info
          </span>
        </p>
        <p>
          <Emoji str="🔄" /> 업데이트: {version}
        </p>
        <a
          href="https://www.notion.so/6bd0a7cdaae4456ca7059a7d4da7c484"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Emoji str="ℹ️" /> 코로나인포 소개
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
