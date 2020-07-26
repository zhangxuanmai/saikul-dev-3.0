import React, { ReactElement } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styles from './index.less'

interface Props {
  
}

export default function HeaderBar({}: Props): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span className={styles.logo}><img src="http://data.saikul.com/images/logo.png" alt="logo" /></span>
          <span className={styles.link}>首页</span>
          <span className={styles.link}>帮助中心</span>
          <span className={styles.link}>申请入住</span>
          <span className={styles.link}>关于我们</span>
        </div>
        <div>
          <Input
            className={styles.input}
            placeholder="输入商品关键词"
            suffix={<SearchOutlined className={styles.icon} />}
          />
          <span className={styles.link}>登录</span>
          <span className={styles.link}>注册</span>
        </div>
      </div>
    </div>
  )
}

