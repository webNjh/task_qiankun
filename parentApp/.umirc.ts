import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:8002', // html entry
        },
        {
          name: 'app3', // 唯一 id
          entry: '//localhost:8003', // html entry
        },
      ],
    },
  },
});
