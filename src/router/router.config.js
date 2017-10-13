import Hello from '../components/Hello.vue'
import Regular from '../pages/Regular.vue'
import Login from '../pages/Login.vue'
export default [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/regular',
    name: 'Regular',
    // meta: {
    //   // 添加该字段，表示进入这个路由是需要登录的
    //   requireAuth: true,
    // },
    component: Regular,

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
