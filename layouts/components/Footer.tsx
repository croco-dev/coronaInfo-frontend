import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Emoji from '../../components/Emoji'
import fetch from 'isomorphic-unfetch'

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
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
  return (
    <StyledFooter>
      <div>
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
