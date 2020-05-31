import Vue from 'vue'
import VueRouter from 'vue-router'
import {
	Home,
	Profile,
	NotFount,
	Login
} from '../views/index.js'

Vue.use(VueRouter)

const routes = [
  {
	path:"/",
	redirect: { name:"Home" }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
	path: '/404',
	name: 'NotFount',
	component: NotFount
  },
  {
  	path: '/my',
  	name: 'Profile',
  	component: Profile
  },
  {
  	path: '/login',
  	name: 'Login',
  	component: Login
  },
  
]

const router = new VueRouter({
  routes
})

export default router
