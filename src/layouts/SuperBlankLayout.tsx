import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ width: 1200, margin: '0 auto' }}>
      {children}
    </div>
  )
};

export default Layout;
