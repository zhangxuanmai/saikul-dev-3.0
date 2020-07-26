import React from 'react';
import HeaderBar from '../components/HeaderBar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <HeaderBar/>
      {children}
    </>
  )
};

export default Layout;
