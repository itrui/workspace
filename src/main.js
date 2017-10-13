// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./state/vuex-store";
// import {spanDown, dropDown} from 'until/until'

Vue.config.productionTip = false;

// Vue.use(until);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


/*router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {

    if(!isEmptyObject(store.state.user)) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})*/

/*const store = {
  state: {
    token: sessionStorage.getItem('token') || '',
    username:''
  }
};*/



router.beforeEach((to, from, next) => {
  // console.log(store.state.username);
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {

    store.state.username=this.loginName;
    console.log(store.state.username);
    // if(!isEmptyObject(store.state.user)) {
    //   next();
    // }
    // else {
      next({
        path: '/regular',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    // }
  }
  else {
    next();
  }
});

/*
router.beforeEach(function(to, from, next) {
  if (to.meta.auth && !state.state.token && to.path !== '/login') {
    return next({
      path: '/regular',
      query: {redirect: to.fullPath}
    })
  }
  next();
});
*/


/*function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}*/
