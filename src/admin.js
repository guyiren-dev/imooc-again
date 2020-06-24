import React from 'react';
import { Row, Col, } from 'antd';
import NavLeft from './component/NavLeft';
import Header from './component/Header';
import Footer from './component/Footer';
import './style.less';


function Admin() {
  return (
    // antd生效
    <Row>
      <Col span={4}>
        <NavLeft/>
      </Col>
      <Col span={20}>
        <Header/>
        <Footer/>
      </Col>
    </Row>
  );
}

export default Admin;
