import React, { Component } from 'react'
import { Space, Divider, message } from 'antd';
import styles from './index.less'
import classnames from 'classnames'

interface Option {
  label: number | string,
  value: number | string,
}
interface Props {

}
interface State {
  value: number | string,
}

export default class CustomRadio extends Component<Props, State> {
  state = {
    value: '0',
  }

  /* 点击选择 */
  handleSelectOption = (params: Option) => {
    const { label, value } = params
    message.info(`label: ${label} - value: ${value}`)
    this.setState((state, props) => { return { value } })
  }

  /* 创建列表 */
  createRadios = (data: Array<Option>) => {
    return data.map((item, index) => {
      const active = item.value === this.state.value ? styles.active : ''
      return (
        <span
          key={index}
          className={classnames(styles.radio, active)}
          onClick={this.handleSelectOption.bind(this, item)}
        >
          {item.label}
        </span>
      )
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Space size={46} align="center">
          <span className={styles.title}>资源分类：</span>
          {this.createRadios(this.state.data)}
        </Space>
        <Divider dashed className={styles.divider} />
      </div>
    )
  }
}

