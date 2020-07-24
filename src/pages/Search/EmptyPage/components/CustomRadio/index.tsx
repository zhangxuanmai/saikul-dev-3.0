import React, { Component } from 'react'
import { Space, Divider, message } from 'antd';
import styles from './index.less'
import classnames from 'classnames'

interface Option {
  label: number | string,
  value: number | string,
}
interface Props {
  title: string,
  value: number | string,
  data: Array<Option>,
  divider?: boolean,
}
interface State {
  value: number | string,
}

export default class CustomRadio extends Component<Props, State> {
  static defaultProps: Props = {
    title: 'title',
    value: '0',
    data: [],
    divider: true,
  }

  public state = {
    value: this.props.value,
  }

  /* 点击选择 */
  handleChangeOption = (params: Option) => {
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
          onClick={this.handleChangeOption.bind(this, item)}
        >{item.label}</span>
      )
    })
  }

  render() {
    const { title, data, divider } = this.props
    const borderColor = divider ? '' : '#ffffff'

    return (
      <div className={styles.container}>
        <Space size={46} align="center">
          <span className={styles.title}>{title}：</span>
          {this.createRadios(data)}
        </Space>
        <Divider dashed className={classnames(styles.divider)} style={{ borderColor: borderColor }} />
      </div>
    )
  }
}

