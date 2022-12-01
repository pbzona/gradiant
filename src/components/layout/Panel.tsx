import React from 'react';
import styles from './Panel.module.css';

const Panel = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.panel}>
      { children }
    </div>
  );
};

export default Panel;