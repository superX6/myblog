import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login/Login'
import Home from 'components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
