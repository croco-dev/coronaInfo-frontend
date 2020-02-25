import React from 'react'
import styled from '@emotion/styled'

const ErrorStyle = styled.div`
  height: 100vh;
  line-height: 1.7;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.div`
  text-align: center;
  font-size: 1.7rem;
  span {
    color: var(--main);
    font-weight: 700;
  }
`
const StatusCode = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
`
const Button = styled.a`
  padding: 5px 15px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  background-color: var(--main);
  transition: 0.5s;
  font-size: 0.85rem;
  border-radius: 3px;
  color: #fff;
  &:hover {
    border: none;
    color: white;
    font-size: 0.92rem;
    transform: scale(1.1);
  }
`
const Error = ({ statusCode }): JSX.Element => {
  return (
    <ErrorStyle>
      <div>
        <Logo>
          <span>이런!</span>
        </Logo>
        <StatusCode>{statusCode}</StatusCode>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {statusCode ? `서버에서 ${statusCode} 오류가 발생!` : '클라이언트 오류 발생!'}
        </div>

        <div
          style={{
            marginTop: '30px',
            textAlign: 'center',
          }}
        >
          <Button href="/">메인으로 이동하기</Button>
        </div>
      </div>
    </ErrorStyle>
  )
}

Error.getInitialProps = ({ res, err }): object => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
