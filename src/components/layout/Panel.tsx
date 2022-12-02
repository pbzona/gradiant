import React from 'react';
import styles from './Panel.module.css';

interface IPanelProps {
  children: React.ReactNode;
  additionalStyles?: string;
}

const Panel = ({ children, additionalStyles }: IPanelProps) => {
  return (
    <div className={`${styles.panel} ${additionalStyles}`}>
      { children }
    </div>
  );
};

export default Panel;