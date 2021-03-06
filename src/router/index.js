import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.config'
import VueResource from 'vue-resource'

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  mode: 'history',
  routes
})
