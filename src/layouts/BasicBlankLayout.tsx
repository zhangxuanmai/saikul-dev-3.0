import React from 'react'
import { useLocation } from 'umi';
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

const Layout: React.FC = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const homeMain = (
    <main style={{ minHeight: 'calc(100vh - 388.5px - 81.25px)' }}>
      {children}
    </main>
  )
  const otherMain = (
    <main style={{
      minHeight: 'calc(100vh - 388.5px - 81.25px)',
      width: '1200px',
      margin: '0 auto',
      padding: '24px'
    }}> {children} </main>
  )

  const renderMain = () => {
    if (isHomePage) return homeMain
    return otherMain
  }

  return (
    <React.Fragment>
      <HeaderBar />
      {renderMain()}
      <FooterBar />
    </React.Fragment>
  )
};

export default Layout;
