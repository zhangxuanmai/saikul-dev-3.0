import React from 'react';
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'http://data.saikul.com/images/logo-white.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'To provide renewable resources industry solutions.',
              className: 'kcvt2h272-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
              <span>通知</span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: 'https://www.saikul.com/bulletin-board.html',
              children: (
                  <span>公告栏</span>
              ),
            },
            {
              name: 'link1',
              href: 'https://www.saikul.com/help-center.html',
              children: (
                  <span>帮助中心</span>
              ),
            },
            {
              name: 'link2',
              href: 'http://download.saikul.com/platform/manual.pdf',
              children: (
                  <span>操作手册</span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            {
              href: 'https://www.saikul.com/about-us.html',
              name: 'link0',
              children: (
                  <span>关于我们</span>
              ),
            },
            { 
              href: 'https://www.saikul.com/about-us.html', 
              name: 'link1', 
              children: '联系我们' 
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
              <span>快捷入口</span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://admin.saikul.com',
              name: 'link0',
              children: (
                  <span>监管端</span>
              ),
            },
            {
              href: 'http://www.sinzetech.com',
              name: 'link1',
              children: (
                  <span>新之官网</span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        浙ICP备17002880号-1 增值电信业务经营许可证：浙B2-20170381 浙公网安备
        33010802007922号 Copyright © 2016-2020 by 新之环保 All Rights Reserved<br />
      </span>
    ),
  },
};
