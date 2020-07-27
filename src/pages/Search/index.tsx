import React, { Component } from 'react'
import { Table, Space, Radio, Card, Form, Typography, Input } from 'antd'
import { SortAscendingOutlined } from '@ant-design/icons'
import MainWrapper from '@/components/MainWrapper'
import StandardFormRow from './components/StandardFormRow'
import TagSelect from './components/TagSelect'
import styles from './index.less'
import { FormValues, LocationSimple } from './index.d'
import { dataForm, dataSource } from './data-source'

const FormItem = Form.Item
const { Text, Link } = Typography
const { Search } = Input


interface Props {
  location: LocationSimple
}
interface State {
  form: FormValues
}

class SearchPage extends Component<Props, State> {
  state = {
    form: {
      category: [],
      taxArea: [],
      dispatchArea: [],
      keyword: "",
      collation: "date",
      current: 1,
      pageSize: 15,
      total: 100,
    },
  }

  /* 排序规则更新 */
  handleRankValuesChange = (event: any) => {
    const { value } = event.target
    this.handleFetchData({
      collation: value,
      current: 1,
    })
  }

  /* 表单内容更新 */
  handleFormValuesChange = (value: any, allValues: object) => {
    this.handleFetchData({
      ...allValues,
      current: 1,
    })
  }

  /* 表格分页更新 */
  handelTableValuesChange = (pagination: any) => {
    const { current } = pagination
    this.handleFetchData({ current })
  }

  /* 点击关键词搜索 */
  handleKeywordSearch = (value: string) => {
    this.handleFetchData({
      keyword: value,
      current: 1,
    })
  }

  /* 请求数据 */
  handleFetchData = async (params: object) => {
    await this.setState((state, props) => {
      const form = { ...state.form, ...params }
      return { form }
    })
    console.log(this.state.form)
  }

  componentDidMount() {
    // console.log(this.props.location)
  }


  render() {
    const { current, pageSize, total, collation } = this.state.form;
    const pagination = {
      current,
      pageSize,
      total,
      showSizeChanger: false,
      hideOnSinglePage: true,
    };
    const columns = [
      {
        title: '排名',
        dataIndex: 'index',
        key: 'index',
        render: (text: any, record: any, index: number) => `${((current - 1) * pageSize) + (index + 1)}`
      },
      {
        title: '品种/牌号',
        dataIndex: 'plant',
        key: 'plant',
        render: (text: string) => <Link href="/detail/123">{text}</Link>,
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
        render: (text: string) => <Text>￥{text}</Text>,
      },
    ];
    const createTagSelectOptions = (data: any[]) => {
      return data.map(item => {
        const { label, value } = item
        return (<TagSelect.Option key={label} value={value}>{label}</TagSelect.Option>)
      })
    };

    return (
      <MainWrapper>
        <Card bordered={false} className={styles.card}>
          <Form layout="inline" onValuesChange={this.handleFormValuesChange} >
            <StandardFormRow title='所属分类' style={{ paddingBottom: 11 }} width={80} block>
              <FormItem name='category'>
                <TagSelect>
                  {createTagSelectOptions(dataForm.category)}
                </TagSelect>
              </FormItem>
            </StandardFormRow>
            <StandardFormRow title='缴税地区' style={{ paddingBottom: 11 }} width={80} block>
              <FormItem name='taxArea'>
                <TagSelect>
                  {createTagSelectOptions(dataForm.taxArea)}
                </TagSelect>
              </FormItem>
            </StandardFormRow>
            <StandardFormRow title='发货地区' style={{ paddingBottom: 11 }} width={80} block>
              <FormItem name='dispatchArea'>
                <TagSelect>
                  {createTagSelectOptions(dataForm.dispatchArea)}
                </TagSelect>
              </FormItem>
            </StandardFormRow>
          </Form>
          <StandardFormRow title="关键词" width={80} block last>
            <Search
              className={styles.input}
              placeholder="请输入商品，买家名称搜索"
              onSearch={value => this.handleKeywordSearch(value)}
            />
          </StandardFormRow>
        </Card>

        <Card bordered={false}>
          <Radio.Group defaultValue={collation} buttonStyle="solid" onChange={this.handleRankValuesChange}>
            <Space className={styles.toolbar}>
              <Radio.Button value="date">上架时间</Radio.Button>
              <Radio.Button value="price">价格排序 <SortAscendingOutlined /></Radio.Button>
            </Space>
          </Radio.Group>
        </Card>

        <div style={{ backgroundColor: "#ffffff" }}>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ ...pagination, position: ['bottomCenter', 'bottomCenter'] }}
            onChange={this.handelTableValuesChange}
          />
        </div>
      </MainWrapper>
    )
  }
}

export default SearchPage;
