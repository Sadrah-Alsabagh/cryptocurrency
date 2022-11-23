import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';


const {Title} = Typography;

const HomePage = () => {
  return (
    <>
      <Title level ={2} className='heading'>Global Crypto Stats</Title>

      <Row>
        <Col span = {12}><Statistic title='Total CryproCurrencies' vlaue='5'/></Col>

        <Col span = {12}><Statistic title='Total Exchanges' vlaue='5'/></Col>

        <Col span = {12}><Statistic title='Total Market Cap' vlaue='5'/></Col>

        <Col span = {12}><Statistic title='Total 24h Volume' vlaue='5'/></Col>

        <Col span = {12}><Statistic title='Total Markets' vlaue='5'/></Col>

      </Row>
    </>
  )
}

export default HomePage;
