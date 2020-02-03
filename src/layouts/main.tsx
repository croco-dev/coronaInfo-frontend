import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/layouts/components/Footer'))

const MainLayout: React.FC = props => {
  const [isMobile, setIsMobile] = useState(false) // 모바일 여부
  const [sidebar, setSidebar] = useState(false) // 사이드바 On/Off

  const resizeEvent = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const sidebarChange = () => {
    sidebar ? setSidebar(false) : setSidebar(true)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      resizeEvent()
      window.addEventListener('resize', resizeEvent)
      return () => {
        window.removeEventListener('resize', resizeEvent)
      }
    }
  }, [])

  if (isMobile) {
    // mobile mode
    const HeaderMobile = dynamic(() => import('@/layouts/components/HeaderMobile'))
    return (
      <>
        <HeaderMobile sidebarChange={sidebarChange} />
        {props.children}
        <Footer />
      </>
    )
  } else {
    // desktop mode
    const Header = dynamic(() => import('@/layouts/components/Header'))
    return (
      <>
        <Header />
        {props.children}
        <Footer />
      </>
    )
  }
}

export default MainLayout
