import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from '../Bookmark/Bookmark.css';

const { Content } = Layout;

function Combination() {
  return (
    <Layout className={styles.content_layout}>
      <Content className={styles.content_main}>
        <Layout style={{ padding: '0', background: '#fff', height: '100%' }}>
          <Content style={{ padding: '10px 30px 0 30px', minHeight: 280, height: '100%' }} className={styles.noteListContent} >
            result
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}


// function mapStateToProps(state) {
//   const {
//     combinationList,
//     searchTips,
//     parentTips,
//     parentNameExists,
//     childNameExists,
//     combinationExists,
//   } = state.combination;
//   return {
//     loading: state.loading.models.combination,
//     combinationList,
//     searchTips,
//     parentTips,
//     parentNameExists,
//     childNameExists,
//     combinationExists,
//   };
// }

export default connect()(Combination);

