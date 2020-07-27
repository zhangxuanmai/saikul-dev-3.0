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
          name: '高级表单',
          icon: 'smile',
          path: '/formadvancedform',
          component: './Examples/FormAdvancedForm',
        },
        {
          name: '搜索列表（项目）',
          icon: 'smile',
          path: '/listsearchprojects',
          component: './Examples/ListSearchProjects',
        },
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
          name: '搜索页',
          icon: 'smile',
          path: '/search',
          component: './Search',
        },
        {
          name: '搜索详情',
          icon: 'smile',
          path: '/detail/:id',
          component: './Detail',
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
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
