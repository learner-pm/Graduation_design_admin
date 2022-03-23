import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index.jsx',
      routes: [
        {
          path: '/',
          component: '@/pages/login.jsx',
        },
        {
          path: '/login',
          component: '@/pages/login.jsx',
        },
        {
          path: '/home',
          component: '@/pages/index.jsx',
        },
        {
          path:'/data',
          component:'@/pages/data.jsx'
        },
        {
          path:"/appUser",
          component:"@/pages/appUser.jsx"
        },
        {
          path:"/set",
          component:"@/pages/set.jsx"
        },
        {
          path:"/upload",
          component:"@/pages/upload.jsx"
        }
      ],
    },
  ],
  proxy: {
    '/api': {
      target: 'http://api.pmthank.cn:5382/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  fastRefresh: {},
  // layout:{
  //   name:'Demo',
  //   locale:true,
  //   layout:'side'
  // },
  dva: {
    immer: true,
    hmr: false,
  },
  antd: {
    dark: false,
    compact: false,
  },
});
