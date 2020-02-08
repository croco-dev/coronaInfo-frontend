import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Aside = styled.aside`
  background: #fff;
  width: 230px;
  height: 100%;
  z-index: 50;
  padding: 25px 25px;
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: none;
      border: 0;
      outline: none;
      cursor: pointer;
    }
  }
  .menu {
    padding: 30px 0;
    ul {
      list-style: none;
      a,
      li {
        color: inherit;
        text-decoration: none;
        display: list-item;
        padding: 12px 0;
        font-size: 1rem;
      }
    }
  }
`

const NavLogo = styled.a`
  font-size: 1.4rem;
  line-height: 1.1;
  span {
    color: var(--main);
    font-weight: 700;
  }
`

interface SidebarProps {
  sidebarChange: () => void
}

const Sidebar: React.FC<SidebarProps> = props => {
  return (
    <Aside>
      <div className="logo">
        <NavLogo>
          <span>코로나</span>
          <br />
          인포
        </NavLogo>
        <button onClick={props.sidebarChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="menu">
        <ul>
          <Link href="/">
            <a>지도</a>
          </Link>
          <Link href="/videos">
            <a>영상 모아보기</a>
          </Link>
          <Link href="/feeds">
            <a>실시간 피드</a>
          </Link>
          {/* <li>커뮤니티 게시판</li> */}
        </ul>
      </div>
    </Aside>
  )
}

export default Sidebar
