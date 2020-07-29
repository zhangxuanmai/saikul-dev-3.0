import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Card, Row, Col, Typography } from 'antd';
import styles from './index.less';

const { Title } = Typography;
const { Meta } = Card;

interface Props { }

const Apply: React.FC<Props> = (props) => {
  const url = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  return (
    <Card className={styles.wrapper}>
      <Title className={styles.title} level={3}>请选择需要注册的类型</Title>

      <Row>
        <Col offset={3} span={7}>
          <Card hoverable cover={<img alt="example" src={url} />} >
            <Meta title="个人" description="个人申请，并委托我方代办个体工商户进行合法交易的" />
          </Card>
        </Col>
        <Col offset={3} span={7}>
          <Card hoverable cover={<img alt="example" src={url} />} >
            <Meta title="企业/个体户" description="已经拥有营业执照的用户，不需要通过我方进行工商注册的买家和卖家" />
          </Card>
        </Col>
      </Row>
    </Card>
  )
}

export default Apply
