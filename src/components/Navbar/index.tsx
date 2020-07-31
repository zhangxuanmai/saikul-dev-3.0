import React, { useState, useRef } from 'react'
import { Typography, Space, Modal, Radio, Card, Row, Col, Divider, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Link, Title, Text } = Typography

const LoginBefore = () => {
  return (
    <Space size={32}>
      <Link className={styles.link} href="https://www.saikul.com/search.html?q=&type=废塑料"><SearchOutlined /></Link>
      <Link className={styles.link} href="https://www.saikul.com/login.html">登录</Link>
      <Link className={styles.link} href="https://www.saikul.com/register.html">注册</Link>
    </Space>
  )
}

const LoginAfter = () => {
  const formRef: any = useRef();
  const defaultInitialValues = {
    buyer: '青岛新之环保科技股份有限公司',
    seller: '青岛新之环保科技股份有限公司',
  };
  const [visible, setVisible] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<object>(defaultInitialValues);
  const options = [
    { label: '青岛新之环保科技股份有限公司', value: '青岛新之环保科技股份有限公司' },
    { label: '浙江新之环保有限公司', value: '浙江新之环保有限公司' },
    { label: '青岛新之再生资源有限公司', value: '青岛新之再生资源有限公司' },
    { label: '福建新之环保有限公司', value: '福建新之环保有限公司' },
    { label: '安徽新之环保有限公司', value: '安徽新之环保有限公司' },
    { label: '新之环保', value: '新之环保' },
  ];

  const handleOk = () => {
    const updateInitialValues = formRef.current.getFieldsValue()
    setInitialValues(updateInitialValues)
    setVisible(false)
  };

  const handleCancel = () => {
    formRef.current.resetFields()
    setVisible(false)
  };

  return (
    <Space size={32}>
      <Link className={styles.link} href="/search"><SearchOutlined /></Link>
      <Link className={styles.link} onClick={() => setVisible(true)}>交易主体</Link>
      <Link className={styles.link} href="#">交易中心</Link>
      <Link className={styles.link} href="#">个人中心</Link>

      <Modal
        title="交易主体切换"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          ref={formRef}
          initialValues={initialValues}
          layout="vertical"
        >
          <Form.Item label="买家" name="buyer" >
            <Radio.Group options={options} />
          </Form.Item>
          <Divider dashed />
          <Form.Item label="卖家" name="seller" >
            <Radio.Group options={options} />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  )
}

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = (props) => {
  const [loginStatus, setLoginStatus] = useState<boolean>(true)

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Space size={32}>
          <Link href="/" className={styles.logo}>
            <img src={"http://data.saikul.com/images/logo.png"} alt="logo" />
          </Link>
          {/* <Link className={styles.link} href="https://www.saikul.com/trader-register.html">申请入住</Link> */}
          {/* <Link className={styles.link} href="https://www.saikul.com/help-center.html">帮助中心</Link> */}
          <Link className={styles.link} href="/apply">申请入住</Link>
          <Link className={styles.link} href="/helper">帮助中心</Link>
          <Link className={styles.link} href="https://www.saikul.com/about-us.html">关于我们</Link>
        </Space>

        {loginStatus ? <LoginAfter /> : <LoginBefore />}
      </div>
    </header>
  )
}

export default NavBar
