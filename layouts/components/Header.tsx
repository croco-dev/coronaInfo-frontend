import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Container from '@/components/Container'
import { Menu } from '@/layouts/components/Menu'

const EditedContainer = styled(Container)`
  align-items: center;
  display: flex;
  height: 100%;
`

const Nav = styled.nav`
  background: #fff;
  height: 60px;
  z-index: 20;
  &.fixed {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
  }
`

const NavLogo = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  color: #2c2c2c;
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
  a {
    padding: 0 13px;
    font-size: 0.95rem;
    text-decoration: none;
    color: #585858;
  }
`

// const NavRight = styled.div`
//   display: block;
//   margin-left: auto;
// `

// const NavButton = styled.a`
//   background: var(--main);
//   border-radius: 30px;
//   color: #fff;
//   padding: 10px 48px;
//   font-weight: 500;
// `

interface HeaderProps {
  fix?: boolean
}

const Header = ({ fix }: HeaderProps): JSX.Element => {
  return (
    <Nav className={fix ? 'fixed' : ''}>
      <EditedContainer>
        <Link href="/" passHref>
          <NavLogo>
            <span>코로나</span>인포
          </NavLogo>
        </Link>
        <NavMenu>
          {Menu.map((item, i) => {
            return (
              <Link href={item.href} key={i}>
                <a>{item.title}</a>
              </Link>
            )
          })}
          {/* <li>커뮤니티 게시판</li> */}
        </NavMenu>
        {/* <NavRight>
          <NavButton>로그인</NavButton>
        </NavRight> */}
      </EditedContainer>
    </Nav>
  )
}

export default Header
