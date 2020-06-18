import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const _pageUrl = require('./routeEnvironment/dev_env.js')



import notfound from '@/views/common/404.vue'
import login from "../views/common/login.vue"
import admin from "../views/src/index.vue"
import home from "../views/src/home/home.vue"


const globalRoutes = [{
		path: "/404",
		name: '404',
		component: _pageUrl('common/404'),
		meta: {
			title: "404未找到"
		}
	},
	{
		path: "/login",
		name: "login",
		component: _pageUrl('common/login'),
		meta: {
			title: "登陆"
		}
	}
]

const mainRoutes = [{
		path: "/",
		redirect: {
			name: "home"
		},
	},
	{
		path: "/admin",
		name: "admin",
		component: _pageUrl('src/index'),
		meta: {
			title: "首页"
		},
		children: [{
				path: "/home",
				name: "home",
				component: _pageUrl('src/home/home'),
			},
			{
				path: "/common",
				name: "common",
				component: _pageUrl('src/commonUse/dealWithThing')
			},
			{
				path: "/control",
				name: "control",
				component: _pageUrl('src/control/risk'),
			},
			{
				path: "/man",
				name: "management",
				component: _pageUrl('src/management/machine'),
			},
			{
				path: "/mantope",
				name: "management",
				component: _pageUrl('src/management/operative'),
			},
			{
				path: "/manres",
				name: "management",
				component: _pageUrl('src/management/resource'),
			},
			{
				path: "/sysauth",
				name: "system",
				component: _pageUrl('src/system/authenticatin'),
			},
			{
				path: "/syssys",
				name: "systemdefend",
				component: _pageUrl('src/system/systemDefend'),
			},
		]
	}

]

const router = new VueRouter({
	mode: "hash",
	routes: globalRoutes.concat(mainRoutes)
})

export default router
