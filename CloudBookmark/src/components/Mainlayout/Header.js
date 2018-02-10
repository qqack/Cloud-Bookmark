import React, { Component } from 'react';
import { Menu } from 'antd';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        className={style.menuBar}
      >
        <Menu.Item className={style.menu}>
          <div className={style.title} ><h3>Cloud Bookmark</h3></div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default (Header);
