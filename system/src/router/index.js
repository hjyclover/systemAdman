import Vue from 'vue'
import VueRouter from 'vue-router'
import {
	Home,
	Admin,
	Profile,
	NotFount,
	Login,
	NumberMarger,
	resideMarge,
	resourceMarge,
	systemMarge
} from '../views/index.js'

Vue.use(VueRouter)

const routes = [{
		path: "/admin",
		redirect: {
			name: "Admin"
		}
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		children:[
			{
				path: '/my',
				name: 'Profile',
				component: Profile,
				meta: {
					requireAute: true
				}
			},
			{
				path: '/numbermarger',
				name: 'NumberMarger',
				component: NumberMarger
			},
			{
				path: '/admin',
				name: 'Admin',
				component: Admin
			},
			{
				path: '/residemarge',
				name: 'resideMarge',
				component: resideMarge
			},
			{
				path: '/resourcemarge',
				name: 'resourceMarge',
				component: resourceMarge
			},
			{
				path: '/systemmarge',
				name: 'systemMarge',
				component: systemMarge
			},
		]
	},
	{
		path: '/404',
		name: 'NotFount',
		component: NotFount
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
