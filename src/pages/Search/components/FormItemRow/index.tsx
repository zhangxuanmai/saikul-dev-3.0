import React from 'react';
import { Form, Divider } from 'antd';
import styles from './index.less';

interface Props {
  label?: string;
  name?: string;
  children: React.ReactNode;
  divider?: boolean
}

const FormItemRow: React.FC<Props> = ({ children, label, name, divider = true }) => {
  return (
    <>
      <Form.Item className={styles.row} label={label} name={name}>
        {children}
      </Form.Item>
      {divider && <Divider dashed className={styles.divider} />}
    </>
  )
};

export default FormItemRow;
