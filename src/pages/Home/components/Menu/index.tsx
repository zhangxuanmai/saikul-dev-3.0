import React  from 'react';
import { RightOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { useHistory } from 'umi';
import { options } from './constant';
import styles from './index.less';
import classnames from 'classnames';

const { Link } = Typography

interface Props { }
interface GarbageType {
  title: string;
  subtitle: string,
  [key: string]: any
}
interface Option {
  title: string,
  content: string[]
}

const MenuPanel: React.FC<Props> = (props) => {
  const history = useHistory()

  /* 构造子菜单 */
  const createSubMenuItems = (params: Array<Option>, type?: string) => {
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
                  onClick={() => history.push({pathname: '/search', state: {
                    type: type,
                    content: content,
                    value: text,
                  }})}
                >{text}</Link>
              )
            })}
            <Divider className={styles.divider} dashed />
          </div>
        </div>
      )
    })
  }

  /* 构造主菜单 */
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
            {createSubMenuItems(options, title)}
          </div>
        </div>
      )
    })
  }

  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.menu)}>
        <div className={classnames(styles.headline)}>
          <span>回收分类</span>
          <AppstoreOutlined />
        </div>
        {createMenuItems(options)}
      </div>
    </div>
  )
}

export default MenuPanel;
