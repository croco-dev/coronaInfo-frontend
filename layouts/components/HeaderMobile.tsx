import React from 'react'
import styled from '@emotion/styled'
import Container from '../../components/Container'
import Link from 'next/link'

const EditedContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  justify-content: space-between;
  padding: 0 10px;
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
  cursor: pointer;
  span {
    color: var(--main);
    font-weight: 700;
  }
`

const Menubar = styled.button`
  background: transparent;
  border: 0;
  height: 100%;
  outline: none;
  cursor: pointer;
`

interface HeaderProps {
  sidebarChange: () => void
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <Nav>
      <EditedContainer>
        <Menubar onClick={props.sidebarChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Menubar>
        <Link href="/">
          <NavLogo>
            <span>코로나</span>인포
          </NavLogo>
        </Link>
      </EditedContainer>
    </Nav>
  )
}

export default Header
