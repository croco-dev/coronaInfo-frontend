import React from 'react'
import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'

const MainLayout: React.FC = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default MainLayout
