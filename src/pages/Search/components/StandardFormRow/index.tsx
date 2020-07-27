import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

interface StandardFormRowProps {
  title?: string;
  last?: boolean;
  block?: boolean;
  grid?: boolean;
  style?: React.CSSProperties;
  [kye: string]: any
}

const StandardFormRow: React.FC<StandardFormRowProps> = ({
  width,
  title,
  children,
  last,
  block,
  grid,
  ...rest
}) => {
  const cls = classNames(styles.standardFormRow, {
    [styles.standardFormRowBlock]: block,
    [styles.standardFormRowLast]: last,
    [styles.standardFormRowGrid]: grid,
  });

  return (
    <div className={cls} {...rest}>
      {title && (
        <div className={styles.label} style={{width: width}}>
          <span>{title}</span>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default StandardFormRow;
