import React, { ReactElement } from 'react'
import { Typography, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { history, useLocation } from 'umi'
import styles from './index.less'

const { Link } = Typography

interface Props {

}

function HeaderBar({ }: Props): ReactElement {
  const location = useLocation()
  const pathname = location.pathname
  const isHomePage = pathname === '/'

  const handleToSearchPage = () => {
    history.push({
      pathname: '/search'
    })
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Space size={32}>
          <Link href="/" className={styles.logo}>
            <img src={"http://data.saikul.com/images/logo.png"} alt="logo" />
          </Link>
          <Link className={styles.link} href="/apply">申请入住</Link>
          <Link className={styles.link} href="/helper">帮助中心</Link>
          <Link className={styles.link} href="/about">关于我们</Link>
        </Space>

        <Space size={32}>
          {isHomePage && <SearchOutlined onClick={handleToSearchPage} />}
          <Link className={styles.link} href="#">登录</Link>
          <Link className={styles.link} href="#">注册</Link>
        </Space>
      </div>
    </header>
  )
}

export default HeaderBar






