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

const Error = ({ statusCode }): JSX.Element => {
  return (
    <ErrorStyle>
      <div>
        <Logo>
          <span>코로나</span>인포
        </Logo>
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
          }}
        >
          <p>이용에 불편을 드려서 죄송합니다.</p>
          <p>
            이메일이나 기타 연락처로 이 오류에 대해 전해주신다면, 서비스 개선에 도움이 될 수
            있습니다.
          </p>
        </div>
        <div
          style={{
            marginTop: '30px',
            textAlign: 'center',
          }}
        >
          <a href="/">코로나인포 메인</a>
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
