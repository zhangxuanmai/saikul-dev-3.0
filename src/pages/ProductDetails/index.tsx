import React, { useRef } from 'react';
import {
  Card,
  Row,
  Col,
  Space,
  Typography,
  Carousel,
  InputNumber,
  Descriptions,
  Input,
  Button,
  Statistic,
  Divider
} from 'antd';
import styles from './index.less';

const { Title, Paragraph, Text } = Typography;

interface Props { }

const ProductDetails: React.FC<Props> = (props) => {

  const inputRef: any = useRef()
  const gutter = 24

  const handleSlidesChange = (index: number) => {
    inputRef.current.slick.slickGoTo(index)
  }

  const createSlideItems = () => {
    return [
      'http://suo.im/6meori',
      'http://suo.im/6eIBzL',
      'http://suo.im/6meoGM',
      'http://suo.im/6meoHq'
    ].map((item, i) => {
      return (
        <div className={styles.slide} key={i}>
          <img className={styles.img} src={item} alt="img" />
        </div>
      )
    })
  }

  const createDotItems = () => {
    return [
      'http://suo.im/6meori',
      'http://suo.im/6eIBzL',
      'http://suo.im/6meoGM',
      'http://suo.im/6meoHq'
    ].map((item, i) => {
      return (
        <li
          className={styles.dot}
          key={i}
          onClick={() => handleSlidesChange(i)}>
          <img className={styles.img} src={item} alt="img" />
        </li>
      )
    })
  }

  return (
    <React.Fragment>
      <div className={styles.section}>
        <Card>
          <Row gutter={gutter}>
            <Col span={10}>
              <Carousel dots={false} effect="fade" ref={inputRef}>
                {createSlideItems()}
              </Carousel>
              <ul className={styles.dots}>
                {createDotItems()}
              </ul>
            </Col>
            <Col span={14}>
              <div className={styles.info}>
                <Statistic className={styles.statistic} value={112893} precision={2} prefix="￥" suffix="/ 吨" />
                <Descriptions title="LDPE农膜" column={1}>
                  <Descriptions.Item label="卖家">empty</Descriptions.Item>
                  <Descriptions.Item label="关联个人">empty</Descriptions.Item>
                  <Descriptions.Item label="所在地">empty</Descriptions.Item>
                  <Descriptions.Item label="货源地">empty</Descriptions.Item>
                  <Descriptions.Item label="库存">empty</Descriptions.Item>
                  <Descriptions.Item label="重量">
                    <InputNumber className={styles.input} />
                  </Descriptions.Item>
                  <Descriptions.Item label="商品总价">
                    <Input suffix="元" className={styles.input} />
                  </Descriptions.Item>
                  <Descriptions.Item label="增值税">empty</Descriptions.Item>
                </Descriptions>
                <Space className={styles.buttons}>
                  <Button danger>立即采购</Button>
                  <Button type="primary" danger>加入购入车</Button>
                </Space>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <div className={styles.section}>
        <Card title="商品详情" type="inner">
          <Descriptions>
            <Descriptions.Item label="品种">empty</Descriptions.Item>
            <Descriptions.Item label="货源地">empty</Descriptions.Item>
            <Descriptions.Item label="颜色">empty</Descriptions.Item>
            <Descriptions.Item label="形态">empty</Descriptions.Item>
            <Descriptions.Item label="用途">empty</Descriptions.Item>
          </Descriptions>
        </Card>
      </div>

      <div className={styles.section}>
        <Card title="注意事项" type="inner">
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              In the process of internal desktop applications development, many different design specs and
              implementations would be involved, which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design language for background
              applications, is refined by Ant UED Team, which aims to
              <Text strong>
                uniform the user interface specs for internal background projects, lower the unnecessary
                cost of design differences and implementation and liberate the resources of design and
                front-end development
              </Text>.
            </Paragraph>

            <Title level={2}>Guidelines and Resources</Title>
            <Paragraph>
              We supply a series of design principles, practical patterns and high quality design resources
              (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
              prototypes beautifully and efficiently.
            </Paragraph>

            <Divider />

            <Title>Introduction</Title>
            <Paragraph>
              In the process of internal desktop applications development, many different design specs and
              implementations would be involved, which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design language for background
              applications, is refined by Ant UED Team, which aims to
              <Text strong>
                uniform the user interface specs for internal background projects, lower the unnecessary
                cost of design differences and implementation and liberate the resources of design and
                front-end development
              </Text>.
            </Paragraph>

          </Typography>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default ProductDetails