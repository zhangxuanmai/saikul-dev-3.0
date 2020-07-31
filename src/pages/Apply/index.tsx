import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import classnames from 'classnames';
import { Card, Row, Col, Typography } from 'antd';
import styles from './index.less';

const { Title } = Typography;
const { Meta } = Card;

interface Props { }

const Apply: React.FC<Props> = (props) => {
  const url = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <Card className={styles.wrapper}>
          <Title className={styles.title} level={3}>请选择需要注册的类型</Title>

          <div className={styles.bolck}>
            <Card hoverable cover={<img alt="example" src={url} />} >
              <Meta title="个人" description="个人申请，并委托我方代办个体工商户进行合法交易的" />
            </Card>
            <Card hoverable cover={<img alt="example" src={url} />} >
              <Meta title="企业/个体户" description="已经拥有营业执照的用户，不需要通过我方进行工商注册的买家和卖家" />
            </Card>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Apply
