import React from 'react'
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <HeaderBar />
      {children}
      <FooterBar />
    </>
  )
};

export default Layout;
