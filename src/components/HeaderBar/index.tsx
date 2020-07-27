import React, { Component } from 'react'
import { Typography, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { history } from 'umi'
import styles from './index.less'

const { Link } = Typography

interface Props {

}
interface State {
}

export default class HeaderBar extends Component<Props, State> {
  state = {}

  handleToSearchPage = () => {
    history.push({ pathname: '/search' })
  }

  render() {
    return (
      <header className={styles.wrapper}>
        <div className={styles.container}>
          <Space size={32}>
            <Link href="/" className={styles.logo}>
              <img src="http://data.saikul.com/images/logo.png" alt="logo" />
            </Link>
            <Link className={styles.link} href="/apply">申请入住</Link>
            <Link className={styles.link} href="/helper">帮助中心</Link>
            <Link className={styles.link} href="/about">关于我们</Link>
          </Space>

          <Space size={32}>
            <SearchOutlined onClick={this.handleToSearchPage} />
            <Link className={styles.link} href="#">登录</Link>
            <Link className={styles.link} href="#">注册</Link>
          </Space>
        </div>
      </header>
    )
  }
}





