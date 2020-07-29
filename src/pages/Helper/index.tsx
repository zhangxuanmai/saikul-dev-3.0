import React, { useEffect } from 'react';
import {
  Carousel,
  Typography,
  Row,
  Col,
  Card,
  Space,
} from 'antd';
import styles from './index.less';
import classnames from 'classnames';

const { Title, Text, Link, Paragraph } = Typography;

interface Props {

}

const HelperPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Carousel>
        <div className={styles.banner}>
          <div className={styles.bannertitle}>
            <h2 className={styles.title}>帮助中心</h2>
            <p className={styles.subtitle}>Help center</p>
          </div>
        </div>
      </Carousel>

      <div className={styles.block}>
        <Title level={3}>问题分类</Title>
        <Row gutter={16}>
          {
            Array(8).fill(2).map(item => {
              return (
                <Col span={6}>
                  <Card>2</Card>
                </Col>
              )
            })
          }
        </Row>
      </div>

      <div className={styles.block}>
        <Title level={3}>热门问题</Title>
        <Card>
          <Card.Grid hoverable={false}>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
        </Card>
      </div>

      <div className={styles.block}>
        <Title level={3}>联系客服</Title>
        <Card>
          <Card.Grid>Content</Card.Grid>
          <Card.Grid>Content</Card.Grid>
        </Card>
      </div>
    </div>
  )
}


export default HelperPage
