/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Nav3';
import Banner0 from './Banner0';
import Feature6 from './Feature6';
import Content3 from './Content3';
import Feature8 from './Feature8';
import Content12 from './Content12';
import Footer1 from './Footer1';
import numeral from 'numeral'

import {
  Nav30DataSource,
  Banner00DataSource,
  Feature60DataSource,
  Content30DataSource,
  Feature80DataSource,
  Content120DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});


const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      Feature60DataSource: Feature60DataSource
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  static getDerivedStateFromProps(props, state) {
    const data = props.data[0]
    if (data) {
      const {
        lastMonthTradingVolume,
        totalTaxAmount,
        totalTaxableOrderAmount,
        totalTaxableOrderCount,
        totalTradingAmount,
        totalTradingCount,
        totalTradingVolume,
      } = data

      const amountMoney = '1' + numeral(totalTradingAmount / Math.pow(10, 8)).format('0,0.00')
      const amountTonnage = numeral(totalTradingVolume / Math.pow(10, 5)).format('0,0.00')
      const amountTax = numeral(totalTaxAmount / Math.pow(10, 8)).format('0,0.00')
      const amountOrder = numeral(totalTaxableOrderAmount / Math.pow(10, 8)).format('0,0.00')
      const Feature60DataSource = {
        wrapper: { className: 'home-page-wrapper feature6-wrapper' },
        OverPack: { className: 'home-page feature6', playScale: 0.3 },
        Carousel: {
          className: 'feature6-content',
          dots: false,
          wrapper: { className: 'feature6-content-wrapper' },
          titleWrapper: {
            className: 'feature6-title-wrapper',
            barWrapper: {
              className: 'feature6-title-bar-wrapper',
              children: { className: 'feature6-title-bar' },
            },
            title: { className: 'feature6-title' },
          },
          children: [
            {
              title: {
                className: 'feature6-title-text',
                children: (
                  <span>交易统计</span>
                ),
              },
              className: 'feature6-item',
              name: 'block0',
              children: [
                {
                  md: 8,
                  xs: 24,
                  className: 'feature6-number-wrapper',
                  name: 'child0',
                  number: {
                    className: 'feature6-number',
                    unit: {
                      className: 'feature6-unit',
                      children: (
                        <span>亿</span>
                      ),
                    },
                    toText: true,
                    children: `${amountMoney}`,
                  },
                  children: {
                    className: 'feature6-text',
                    children: (
                      <span>总交易额</span>
                    ),
                  },
                },
                {
                  md: 8,
                  xs: 24,
                  className: 'feature6-number-wrapper',
                  name: 'child1',
                  number: {
                    className: 'feature6-number',
                    unit: {
                      className: 'feature6-unit',
                      children: (
                        <span>笔</span>
                      ),
                    },
                    toText: true,
                    children: `${totalTradingCount}`,
                  },
                  children: {
                    className: 'feature6-text',
                    children: (
                      <span>支付笔数</span>
                    ),
                  },
                },
                {
                  md: 8,
                  xs: 24,
                  className: 'feature6-number-wrapper',
                  name: 'child2',
                  number: {
                    className: 'feature6-number',
                    unit: {
                      className: 'feature6-unit',
                      children: (
                        <span>万</span>
                      ),
                    },
                    toText: true,
                    children: `${amountTonnage}`,
                  },
                  children: {
                    className: 'feature6-text',
                    children: (
                      <span>总交易吨数</span>
                    ),
                  },
                },
              ],
            },
            {
              title: {
                className: 'feature6-title-text',
                children: (
                  <span>纳税统计</span>
                ),
              },
              className: 'feature6-item',
              name: 'block1',
              children: [
                {
                  md: 8,
                  xs: 24,
                  name: 'child0',
                  className: 'feature6-number-wrapper',
                  number: {
                    className: 'feature6-number',
                    unit: { className: 'feature6-unit', children: '笔' },
                    toText: true,
                    children: `${totalTaxableOrderCount}`,
                  },
                  children: { className: 'feature6-text', children: '纳税单数' },
                },
                {
                  md: 8,
                  xs: 24,
                  name: 'child1',
                  className: 'feature6-number-wrapper',
                  number: {
                    className: 'feature6-number',
                    unit: { className: 'feature6-unit', children: '亿' },
                    toText: true,
                    children: `${amountTax}`,
                  },
                  children: { className: 'feature6-text', children: '代扣税额' },
                },
                {
                  md: 8,
                  xs: 24,
                  name: 'child2',
                  className: 'feature6-number-wrapper',
                  number: {
                    className: 'feature6-number',
                    unit: { className: 'feature6-unit', children: '亿' },
                    toText: true,
                    children: `${amountOrder}`,
                  },
                  children: { className: 'feature6-text', children: '订单额' },
                },
              ],
            },
          ]
        }
      }
      return {
        Feature60DataSource
      }
    }

    return null
  }

  render() {

    const children = [
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6
        id="Feature6_0"
        key="Feature6_0"
        dataSource={this.state.Feature60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature80DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content12
        id="Content12_0"
        key="Content12_0"
        dataSource={Content120DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        style={{ minHeight: '100vh' }}
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div >
    );
  }
}
