// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BasicBlankLayout',
      routes: [
        {
          name: '首页',
          icon: 'smile',
          path: '/',
          component: './Home',
        },
        {
          name: '申请入住',
          icon: 'smile',
          path: '/apply',
          component: './Apply',
        },
        {
          name: '帮助中心',
          icon: 'smile',
          path: '/helper',
          component: './Helper',
        },
        {
          name: '关于我们',
          icon: 'smile',
          path: '/about',
          component: './about',
        },
        {
          name: '商品搜索页',
          icon: 'smile',
          path: '/search',
          component: './Search',
        },
        {
          name: '商品详情页',
          icon: 'smile',
          path: '/product/:id',
          component: './ProductDetails',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: {
    '/api/': {
      target: 'http://10.50.192.37:7777/platform',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  manifest: {
    basePath: '/',
  },
});
