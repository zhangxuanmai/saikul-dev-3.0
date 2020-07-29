import React, {useEffect} from 'react';
import { useHistory, useLocation } from 'umi';
import { Table, Space, Radio, Card, Form, Typography, Input } from 'antd';
import { SortAscendingOutlined } from '@ant-design/icons';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import styles from './index.less';
import { dataForm, dataSource } from './data-source';

const FormItem = Form.Item
const { Text, Link } = Typography
const { Search } = Input

interface Props {
  dispatchArea: any[];
  category: any[];
  taxArea: any[];
  keyword: string;
  collation: string;
  current: number;
  pageSize: number;
  total: number;
}

const SearchPage: React.FC<Props> = ({
  dispatchArea = [],
  category = [],
  taxArea = [],
  keyword = "",
  collation = 'date',
  current = 1,
  pageSize = 10,
  total = 100,
}) => {
  const location = useLocation()

  useEffect(() => {
    console.log(location)
  }, []);

  /* 排序规则更新 */
  const handleRankTypeChange = (event: any) => {
    const { value } = event.target
    console.log(value)
  };

  /* 表单内容更新 */
  const handleFormValuesChange = (value: any, allValues: object) => {
    console.log(allValues)
  };

  /* 表格分页更新 */
  const handelTableValuesChange = (pagination: any) => {
    console.log(pagination)
  };

  /* 点击关键词搜索 */
  const handleKeywordSearch = (value: string) => {
    console.log(value)
  };

  /* 构造选择栏子组件 */
  const createTagSelectOptions = (data: any[]) => {
    return data.map(item => {
      const { label, value } = item
      return (<TagSelect.Option key={label} value={value}>{label}</TagSelect.Option>)
    })
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
      render: (text: string, record: any) => <Link href={`/product/${record.key}`}>{text}</Link>,
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

  return (
    <React.Fragment>
      <Card bordered={true} className={styles.card}>
        <Form layout="inline" onValuesChange={handleFormValuesChange} >
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
            onSearch={value => handleKeywordSearch(value)}
          />
        </StandardFormRow>
      </Card>

      <Card bordered={true}>
        <Radio.Group defaultValue={collation} buttonStyle="solid" onChange={handleRankTypeChange}>
          <Space className={styles.toolbar}>
            <Radio.Button value="date">上架时间</Radio.Button>
            <Radio.Button value="price">价格排序 <SortAscendingOutlined /></Radio.Button>
          </Space>
        </Radio.Group>
      </Card>

      <div className={styles.section}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            // current,
            pageSize,
            total,
            showSizeChanger: false,
            hideOnSinglePage: true,
            position: ['bottomCenter', 'bottomCenter']
          }}
          onChange={handelTableValuesChange}
        />
      </div>
    </React.Fragment>
  )
}

export default SearchPage;
