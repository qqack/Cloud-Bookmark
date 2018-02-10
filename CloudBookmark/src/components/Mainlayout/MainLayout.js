import React from 'react';
import { Layout } from 'antd';
import styles from './MainLayout.css';
import Header from './Header';

const { Content } = Layout;


function MainLayout({ children }) {
  return (
    <div className={styles.normal}>
      <Header />
      <Content className={styles.content}>
        {children}
      </Content>
    </div>
  );
}

export default MainLayout;
