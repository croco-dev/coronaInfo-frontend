import React from 'react'
import styled from '@emotion/styled'
import Container from '@/components/Container'

const EditedContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
`

const Nav = styled.nav`
  background: #fff;
  height: 60px;
`

const NavLogo = styled.a`
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  font-size: 1.3rem;
  span {
    color: var(--main);
    font-weight: 700;
  }
`

const Header: React.FC = () => {
  return (
    <Nav>
      <EditedContainer>
        <NavLogo>
          <span>코로나</span>인포
        </NavLogo>
      </EditedContainer>
    </Nav>
  )
}

export default Header
