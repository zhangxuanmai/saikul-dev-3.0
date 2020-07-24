import React, { ReactElement } from 'react'
import { RightOutlined, AppstoreOutlined } from '@ant-design/icons'
import { options } from './constant'
import { Divider  } from 'antd'
import styles from './index.less'
import classnames from 'classnames'

interface Props {

}
interface GarbageType {
  title: string;
  subtitle: string,
  [key: string]: any
}
interface Option {
  title: string,
  content: string[]
}

export default function MenuPanel({ }: Props): ReactElement {

  const createSubMenuItems = (params: Array<Option>) => {
    return params.map(item => {
      const { title, content } = item

      return (
        <div className={styles.row} key={title}>
          <div className={styles.title}>
            <span className={styles.subtitle}>{title}</span>
            <RightOutlined />
          </div>
          <div className={styles.main}>
            {content.map((text: string) => (<span key={text} className={styles.option}>{text}</span>))}
            <Divider className={styles.divider} dashed />
          </div>
        </div>
      )
    })
  }

  const createMenuItems = (params: Array<GarbageType>) => {
    return params.map((item, index) => {
      const { title, subtitle, options } = item

      return (
        <div className={styles.menuitem} key={index}>
          <span>{title}</span>
          <span className={styles.type}>{subtitle} <RightOutlined /></span>
          <div className={styles.content}>
            {createSubMenuItems(options)}
          </div>
        </div>
      )
    })
  }

  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.menu, styles.sidebar)}>
        <div className={classnames(styles.headline)}>
          <span>行业分类</span>
          <AppstoreOutlined />
        </div>
        {createMenuItems(options)}
      </div>
    </div>
  )
}
