import React, { ReactElement } from 'react';
import { Space, Radio } from 'antd';
import styles from './index.less';

interface OptionType {
  label?: string | number;
  value?: string | number;
  name?: string | number;
}

interface Props {
  size?: number;
  value?: string | number;
  onChange?: (value: (string | number)[]) => void;
  options?: Array<OptionType>;
}

function TagRadios({ options = [], size = 24, value = "", onChange }: Props): ReactElement {
  const handleChange = (e: any) => {
    onChange && onChange(e.target.value)
  }
  
  return (
    <Radio.Group
      defaultValue={value}
      size="small"
      optionType="button"
      buttonStyle="solid"
      className={styles.group}
      onChange={handleChange}
    >
      <Space size={size}>
        <Radio.Button key='all' value="">全部</Radio.Button>
        {options.map(item => {
          const label = item.label || item.name
          const value = item.value
          return (
            <Radio.Button key={label} value={value}>{label}</Radio.Button>
          )
        })}
      </Space>
    </Radio.Group>
  )
}

export default TagRadios
