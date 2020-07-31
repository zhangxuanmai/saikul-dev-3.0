import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
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
  const level = 4
  return (
    <React.Fragment>
      <Navbar/>
      <div className={styles.wrapper}>
        <Carousel>
          <div className={styles.banner}>
            <div className={styles.bannertitle}>
              <h2 className={styles.title}>帮助中心</h2>
              <p className={styles.subtitle}>Help center</p>
            </div>
          </div>
        </Carousel>

        <div className={styles.sort}>
          <Title level={level}>问题分类</Title>
          <Card>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
          </Card>
        </div>

        <div className={styles.hot}>
          <Title level={level}>热门问题</Title>
          <Card>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
            <Card.Grid className={styles.grid} hoverable={false}>Content</Card.Grid>
          </Card>
        </div>

        <div className={styles.service}>
          <Title level={level}>联系客服</Title>
          <Card>
            <Card.Grid className={styles.grid}>Content</Card.Grid>
            <Card.Grid className={styles.grid}>Content</Card.Grid>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}


export default HelperPage
