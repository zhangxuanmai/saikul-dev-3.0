import React from 'react';
import styles from './index.less';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
};

export default Layout;
