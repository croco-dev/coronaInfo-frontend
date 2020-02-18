import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const HeaderMobile = dynamic(() => import('./components/HeaderMobile'))
const Header = dynamic(() => import('./components/Header'))
const Footer = dynamic(() => import('./components/Footer'))

const LayoutWrapper = styled.div``

const SideBackground = styled.div`
  position: absolute;
  visibility: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: visibility 0s, opacity 0.1s linear;
  z-index: 200;
  &.show {
    visibility: visible;
    opacity: 1;
  }
`

const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -230px;
  right: 0;
  z-index: 400;
  visibility: hidden;
  transition: visibility 0s, left 0.3s ease-in-out;
  &.show {
    visibility: visible;
    left: 0;
  }
`

interface MainLayoutProps {
  header?: boolean
  footer?: boolean
  isFull?: boolean
  children: React.ReactNode
}

const MainLayout = ({ children, isFull, header, footer }: MainLayoutProps): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false) // 모바일 여부
  const [sidebar, setSidebar] = useState(false) // 사이드바 On/Off

  const resizeEvent = (): void => {
    if (window.innerWidth < 992) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
      setSidebar(false) // desktop 버전으로 가면 사이드바 해제해놓기
    }
  }

  const sidebarChange = (): void => {
    sidebar ? setSidebar(false) : setSidebar(true)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      resizeEvent()
      window.addEventListener('resize', resizeEvent)
      return (): void => {
        window.removeEventListener('resize', resizeEvent)
      }
    }
  }, [])

  if (isMobile) {
    // mobile mode
    const HeaderMobile = dynamic(() => import('./components/HeaderMobile'))
    const Sidebar = dynamic(() => import('./components/Sidebar'))
    return (
      <>
        {header && (
          <>
            <SideBackground className={sidebar && 'show'} onClick={sidebarChange} />
            <SidebarWrapper className={sidebar && 'show'}>
              <Sidebar sidebarChange={sidebarChange} />
            </SidebarWrapper>
            <HeaderMobile sidebarChange={sidebarChange} fix={isFull} />
          </>
        )}
        {children}
        {footer && <Footer />}
      </>
    )
  } else {
    // desktop mode
    const Header = dynamic(() => import('./components/Header'))
    return (
      <>
        <LayoutWrapper>
          {header && <Header fix={isFull} />}
          {children}
          {footer && <Footer />}
        </LayoutWrapper>
      </>
    )
  }
}

MainLayout.defaultProps = {
  header: true,
  footer: true,
}

export default MainLayout
