import layout from '/@/layout/index.vue'
import login from '/@/views/login/index.vue'

const defaultRoutes: any = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    meta: { title: '主页', icon: 'Setting' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('/@/views/home/index.vue'),
        meta: { title: '主页', icon: 'Setting' },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/test',
    name: 'test',
    component: layout,
    redirect: '/test/wudi',
    meta: { title: '测试', icon: 'Setting' },
    children: [
      {
        path: '/test/wudi',
        name: 'wudi',
        component: import('/@/views/test/test.vue'),
        meta: { title: '无敌',icon: 'Setting' }
      },
      {
        path: '/test/libai',
        name: 'libai',
        component: import('/@/views/test/index.vue'),
        meta: { title: '李白',icon: 'Setting' }
      }
    ]
  },
  // {
  //   path: '/ces',
  //   name: 'ces',
  //   component: layout,
  //   redirect: '/home',
  //   meta: { title: 'cscsc', icon: 'Setting' },
  //   children: [
  //     {
  //       path: '/ces',
  //       name: 'test',
  //       component: () => import('/@/views/test/index.vue'),
  //       meta: { title: 'test',icon: 'Setting' }
  //     }
  //   ]
  // },
];

export default defaultRoutes;