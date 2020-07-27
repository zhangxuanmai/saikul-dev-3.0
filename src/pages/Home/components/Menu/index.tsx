import React, { ReactElement } from 'react'
import { RightOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Divider, Typography } from 'antd'
import { history } from 'umi'
import { options } from './constant'
import styles from './index.less'
import classnames from 'classnames'

const { Link } = Typography

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

  const handleClickLink = (value: string) => {
    history.push({
      pathname: '/search',
      state: {
        value: value,
      },
    });
  }
  
  const createSubMenuItems = (params: Array<Option>) => {
    return params.map(item => {
      const { title, content } = item

      return (
        <div className={styles.dl} key={title}>
          <div className={styles.dt}>
            <span className={styles.title}>{title}</span>
            <RightOutlined />
          </div>
          <div className={styles.dd}>
            {content.map((text: string) => {
              return (
                <Link
                  key={text}
                  className={styles.link}
                  onClick={() => handleClickLink(text)}
                >{text}</Link>
              )
            })}
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
        <div key={index}>
          <div className={styles.menuitem}>
            <span>{title}</span>
            <span className={styles.subtitle}>{subtitle} <RightOutlined /></span>
          </div>
          <div className={styles.menucontent}>
            {createSubMenuItems(options)}
          </div>
        </div>
      )
    })
  }

  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.menu)}>
        <div className={classnames(styles.headline)}>
          <span>行业分类</span>
          <AppstoreOutlined />
        </div>
        {createMenuItems(options)}
      </div>
    </div>
  )
}
