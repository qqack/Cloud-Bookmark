import React from 'react';
import { connect } from 'dva';
import ListComponent from '../components/Bookmark/Bookmark';
import MainLayout from '../components/Mainlayout/MainLayout';

function Bookmark({ location }) {
  return (
    <MainLayout location={location}>
      <ListComponent />
    </MainLayout>
  );
}

export default connect()(Bookmark);

