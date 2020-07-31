import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useLocation } from 'umi';
import { Table, Space, Radio, Card, Form, Typography, Input } from 'antd';
import { SortAscendingOutlined } from '@ant-design/icons';
import Navbar from '@/components/Navbar';
import TagRadios from './components/TagRadios';
import FormItemRow from './components/FormItemRow';
import styles from './index.less';
import { fetchGoodsData, fetchSortData } from '@/services/search';
import { areaData, sourceData } from './data-source';
import numeral from 'numeral';


const { Text, Link } = Typography
const { Search } = Input


interface initialValuesType {
  sortName: number | string;
  supplyArea: number | string;
  taxArea: number | string;
  keyword: number | string;
}
interface Props { }

const SearchPage: React.FC<Props> = (props) => {
  const formRef: any = useRef();
  const [initialValues, setInitialValues] = useState<initialValuesType>({
    sortName: '',
    supplyArea: '',
    taxArea: '',
    keyword: '',
  });
  const [current, setCurrent] = useState<number>(1);
  const [collation, setCollation] = useState<string>('updateTime,desc');
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [sortData, setSortData] = useState<any[]>([]);
  const location = useLocation();

  useEffect(() => {
    requestSortsData();
  }, []);

  useEffect(() => {
    requestGoodsData();
  }, [current, collation, initialValues]);

  /* 排序规则更新 */
  const handleRankTypeChange = (event: any) => {
    const { value } = event.target;
    setCurrent(1);
    setCollation(value);
  };

  /* 表单内容更新 */
  const handleFormValuesChange = (value: any, allValues: any) => {
    if (value.keyword) return;
    setCurrent(1);
    setInitialValues(allValues);
  };

  /* 表格分页更新 */
  const handelTableValuesChange = (pagination: any) => {
    const { current } = pagination;
    setCurrent(current);
  };

  /* 点击关键词搜索 */
  const handleKeywordSearch = (value: string) => {
    setCurrent(1);
    setInitialValues({ ...initialValues, keyword: value });
  };

  /* 获取分类数据 */
  const requestSortsData = async () => {
    const data = await fetchSortData();
    const sortData = data.secondaryMerchandise.map((item: any) => ({
      label: item.secondaryMerchandiseName,
      value: item.secondaryMerchandiseId
    }))
    setSortData(sortData)
  }

  /* 获取搜索数据 */
  const requestGoodsData = async () => {
    const { sortName, taxArea, supplyArea, keyword } = formRef.current.getFieldsValue()
    const data = await fetchGoodsData({
      secondaryMerchandiseId: [sortName],
      areaDisId: [supplyArea],
      taxRegionId: [taxArea],
      searchText: keyword,
      page: current - 1,
      sort: collation,
      size: pageSize,
    });
    const { totalElements, content } = data;
    setTotal(totalElements);
    setDataSource(content);
  }

  /* 格式化数字 */
  const formatNumberTool = (value: string, format: string = '0,0.00') => {
    return numeral(value).format(format)
  }

  /* 缴税地区筛选 */
  const filterTaxAreaName = (value: string | number) => {
    if (value === 1) return '青岛胶州';
    if (value === 2) return '安徽宣城';
    if (value === 3) return '安徽宁国';
    return '安徽宁国'
  }


  /* 表格列结构 */
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render: (text: any, record: any, index: number) => `${((current - 1) * pageSize) + (index + 1)}`
    },
    {
      title: '品种/牌号',
      dataIndex: 'merchandiseName',
      key: 'merchandiseName',
      render: (text: string, record: any) => <Link href={`/product/${record.key}`}>{text}</Link>,
    },
    {
      title: '供应商',
      dataIndex: 'supplierName',
      key: 'supplierName',
    },
    {
      title: '货源地区',
      dataIndex: 'areaDisName',
      key: 'areaDisName',
    },
    {
      title: '缴税地区',
      dataIndex: 'taxRegionId',
      key: 'taxRegionId',
      render: (text: string | number) => <Text>{filterTaxAreaName(text)}</Text>,
    },
    {
      title: '剩余(吨)',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '上架时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '价格',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
      render: (text: string) => <Text>￥{formatNumberTool(text)}</Text>,
    },
  ];

  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.content}>
        <Card bordered={true} className={styles.card}>
          <Form
            layout="inline"
            ref={formRef}
            initialValues={initialValues}
            onValuesChange={handleFormValuesChange}
          >
            <FormItemRow label="所属分类" name="sortName">
              <TagRadios options={sortData} />
            </FormItemRow>
            <FormItemRow label="缴税地区" name="taxArea">
              <TagRadios options={areaData} />
            </FormItemRow>
            <FormItemRow label="货源地区" name="supplyArea">
              <TagRadios options={sourceData} />
            </FormItemRow>
            <FormItemRow label="关键词" name="keyword" divider={false}>
              <Search className={styles.input} placeholder="请输入商品，供应商搜索" onSearch={handleKeywordSearch} />
            </FormItemRow>
          </Form>
        </Card>

        <Card bordered={true}>
          <Radio.Group defaultValue={collation} buttonStyle="solid" onChange={handleRankTypeChange}>
            <Space className={styles.toolbar}>
              <Radio.Button value="updateTime,desc">上架时间</Radio.Button>
              <Radio.Button value="unitPrice,desc">价格排序 <SortAscendingOutlined /></Radio.Button>
            </Space>
          </Radio.Group>
        </Card>

        <div className={styles.tablewrapper}>
          <Table
            rowKey="id"
            dataSource={dataSource}
            columns={columns}
            onChange={handelTableValuesChange}
            pagination={{
              current,
              pageSize,
              total,
              showSizeChanger: false,
              hideOnSinglePage: true,
              position: ['bottomCenter']
            }}
          />
        </div>
      </div>
    </React.Fragment >
  )
}

export default SearchPage;
