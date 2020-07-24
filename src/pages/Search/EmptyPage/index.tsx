import React, { Component } from 'react'
import CustomRadio from './components/CustomRadio'
import { PaginationConfig } from 'antd/es/table'
import { Table, Space, Radio } from 'antd'
import { SortAscendingOutlined } from '@ant-design/icons';
import styles from './index.less'

import {
  option1,
  option2,
  option3,
  dataSource,
} from './data-source'


interface Props { }
interface State { }

class EmptyPage extends Component<Props, State> {
  state = {
    current: 1,
    pageSize: 15,
    total: 100,
  }

  handelTableParamsChange = (pagination: PaginationConfig) => {
    const {current} = pagination
    this.setState((state, props) => { return { current }})
  }

  handleRankTypeChange = (e: { target: any }) => {
    console.log(e.target.value)
  }


  render() {
    const { title: t1, value: v1, content: c1 } = option1
    const { title: t2, value: v2, content: c2 } = option2
    const { title: t3, value: v3, content: c3 } = option3
    const { current, pageSize, total } = this.state
    const pagination = {
      current,
      pageSize,
      total,
      showSizeChanger: false,
      hideOnSinglePage: true,
    }
    const columns = [
      {
        title: '排名',
        dataIndex: 'index',
        key: 'index',
        render: (text, record, index) => `${((current - 1) * pageSize) + (index + 1)}`
      },
      {
        title: '品种/牌号',
        dataIndex: 'plant',
        key: 'plant',
        render: (text: string) => <span className={styles.link}>{text}</span>,
      },
      {
        title: '货源地',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '供应商',
        dataIndex: 'supplier',
        key: 'supplier',
      },
      {
        title: '剩余(吨)',
        dataIndex: 'balance',
        key: 'balance',
      },
      {
        title: '上架时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        render: (text: string) => <span className={styles.price}>￥{text}</span>,
      },
    ];

    return (
      <div>
        <div className={styles.block1}>
          <CustomRadio title={t1} value={v1} data={c1} />
          <CustomRadio title={t2} value={v2} data={c2} />
          <CustomRadio title={t3} value={v3} data={c3} divider={false} />
        </div>

        <div className={styles.block2}>
          <Radio.Group defaultValue="0" buttonStyle="solid" onChange={this.handleRankTypeChange}>
            <Space className={styles.top}>
              <Radio.Button value="0">上架时间</Radio.Button>
              <Radio.Button value="1">价格排序 <SortAscendingOutlined /></Radio.Button>
            </Space>
          </Radio.Group>

          <Table
            size="middle"
            dataSource={dataSource}
            columns={columns}
            pagination={pagination}
            onChange={this.handelTableParamsChange}
          />
        </div>
      </div>
    )
  }
}

export default EmptyPage
