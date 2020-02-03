import React from 'react'
import styled from '@emotion/styled'
import Container from '@/components/Container'

const EditedContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 100%;
`

const Nav = styled.nav`
  background: #fff;
  height: 60px;
  z-index: 1;
`

const NavLogo = styled.a`
  font-size: 1.3rem;
  span {
    color: var(--main);
    font-weight: 700;
  }
`

const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin-left: 20px;
  li {
    padding: 0 13px;
    font-size: 0.95rem;
  }
`

const NavRight = styled.div`
  display: block;
  margin-left: auto;
`

const NavButton = styled.a`
  background: var(--main);
  border-radius: 30px;
  color: #fff;
  padding: 12px 48px;
  font-weight: 500;
`

const Header: React.FC = () => {
  return (
    <Nav>
      <EditedContainer>
        <NavLogo>
          <span>코로나</span>인포
        </NavLogo>
        <NavMenu>
          <li>지도</li>
          <li>영상 모아보기</li>
          <li>실시간 피드</li>
          <li>커뮤니티 게시판</li>
        </NavMenu>
        <NavRight>
          <NavButton>로그인</NavButton>
        </NavRight>
      </EditedContainer>
    </Nav>
  )
}

export default Header
