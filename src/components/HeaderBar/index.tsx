import React, { ReactElement } from 'react'
import { Typography, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Link } = Typography

interface Props {}

function HeaderBar({ }: Props): ReactElement {

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Space size={32}>
          <Link href="/" className={styles.logo}>
            <img src={"http://data.saikul.com/images/logo.png"} alt="logo" />
          </Link>
          <Link className={styles.link} href="https://www.saikul.com/trader-register.html">申请入住</Link>
          <Link className={styles.link} href="https://www.saikul.com/help-center.html">帮助中心</Link>
          <Link className={styles.link} href="https://www.saikul.com/about-us.html">关于我们</Link>
        </Space>

        <Space size={32}>
          <Link className={styles.link} href="https://www.saikul.com/search.html?q=&type=废塑料"><SearchOutlined /></Link>
          <Link className={styles.link} href="https://www.saikul.com/login.html">登录</Link>
          <Link className={styles.link} href="https://www.saikul.com/register.html">注册</Link>
        </Space>
      </div>
    </header>
  )
}

export default HeaderBar






