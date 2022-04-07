import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index.jsx',
      title:"登录",
      routes: [
        {
          path: '/',
          component: '@/pages/login.jsx',
          title:"登录",
        },
        {
          path: '/login',
          component: '@/pages/login.jsx',
          title:"登录",
        },
        {
          path: '/home',
          component: '@/pages/index.jsx',
          title:"首页",
        },
        // {
        //   path:'/app',
        //   //component:'@/pages/app.jsx',
        //   routes:[

        //   ]
        // },
        {
          path: '/app',
          component: '@/pages/app.jsx',
          title:"App",
        },
        {
          path: '/app/resoures',
          component: '@/pages/app_resoures.jsx',
          title:"视频和文章",
        },
        {
          path: '/app/run',
          component: '@/pages/app_run.jsx',
          title:"Run",
        },
        {
          path:"/app/tlak",
          component: '@/pages/app_tlak.jsx',
          title:"圈子"
        },
        {
          path: '/user',
          component: '@/pages/user.jsx',
          title:"用户",
        },
        {
          path: '/set',
          component: '@/pages/set.jsx',
          title:"设置",
        },
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
