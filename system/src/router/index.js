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
    component: Home,
		meta:{
			requireAute:true
		}
  },
  {
		path: '/404',
		name: 'NotFount',
		component: NotFount
  },
  {
  	path: '/my',
  	name: 'Profile',
  	component: Profile,
		meta:{
			requireAute:true
		}
  },
  {
  	path: '/login',
  	name: 'Login',
  	component: Login
  },
	{
		path: '*', // 页面不存在的情况下会跳到404页面
		redirect: '/404',
		name: 'NotFount',
		hidden: true
	}
  
]

const router = new VueRouter({
  routes
})

export default router
