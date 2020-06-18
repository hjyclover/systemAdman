<template>
	<!-- 首页入口 -->
	<el-container>
		<el-header>

			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
				<el-menu-item v-for="(item,index) in adminMemuList" :key="index" :index="item.path">{{item.name}}</el-menu-item>
			</el-menu>

		</el-header>


		<el-main>

			<el-container>
				<el-aside>
					<el-row class="tac">
						<el-menu :defaultActive="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
						 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
							<block v-for="(item,index) in menulistArr " :key="index">
							 
								<el-submenu v-if="item.child" :index="item.path">

									<template slot="title">
										<i class="el-icon-location" v-if="item.child"></i>
										<span>{{item.name}}</span>
									</template>
									<el-submenu v-if="sun.child" v-for="(sun,index) in item.child" :key="indx" :index="sun.path" >
										<template slot="title">{{sun.name}}</template>
										<el-menu-item v-if="sun.child" v-for="(gransun,index) in sun.child" :key="indx" :index="gransun.path">{{gransun.name}}</el-menu-item>
									</el-submenu>
									<el-menu-item v-else v-for="(sun,index) in item.child" :key="indx" :index="sun.path">{{sun.name}}</el-menu-item>
								</el-submenu>
								<el-menu-item v-else :index="item.path">
									<i class="el-icon-location"></i>
									{{item.name}}
								</el-menu-item>
								
							</block>
						</el-menu>
					</el-row>
				</el-aside>

				<el-main>
					<router-view />
				</el-main>

			</el-container>
		</el-main>


		<el-footer>Footer</el-footer>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '/home',
				adminIndex: 0,
				// 主菜单列表
				adminMemuList: [{
						index: "1",
						name: "首页",
						path: "/home"
					},
					{
						index: "2",
						name: "协同办公",
						path: "/common"
					},
					{
						index: "3",
						name: "设备管理",
						path: "/man"
					},
					{
						index: "4",
						name: "运营管理",
						path: "/mantope"
					},
					{
						index: "5",
						name: "风险控制",
						path: "/control"
					},
					{
						index: "6",
						name: "能源管理",
						path: "/manres"
					},
					{
						index: "7",
						name: "认证中心",
						path: "/sysauth"
					},
					{
						index: "8",
						name: "运维保障",
						path: "/syssys"
					},
				],


				// 子夜左侧菜单列表
				menuList: [{
						rootRul: '/home',
						child: [{
								id: '1',
								name: '首页1',
								path: "/home",
								child:[
									{
										id: '1-1',
										name: '首页二级菜单',
										path: "/common"
									}
								]
							},
							{
								id: '2',
								name: '首页2',
								path: "/home",
								
							},
							{
								id: '3',
								name: '首页3',
								path: "/home"
							},
							{
								id: '4',
								name: '首页4',
								path: "/home"
							}
						],
					},

					{
						rootRul: '/common',
						child: [{
								id: '1',
								name: '协同1',
								path: "/common"
							},
							{
								id: '2',
								name: '协同2',
								path: "/common"
							},
							{
								id: '3',
								name: '协同3',
								path: "/common"
							}
						],


					},

					{
						rootRul: '/man',
						child: [{
								id: '1',
								name: '设备1',
								path: "/man"
							},
							{
								id: '2',
								name: '设备2',
								path: "/man"
							},
							{
								id: '3',
								name: '设备3',
								path: "/man"
							},
						],

					},


					{
						rootRul: '/mantope',
						child: [{
								id: '1',
								name: '运营1',
								path: "/mantope"
							},
							{
								id: '2',
								name: '运营2',
								path: "/mantope"
							},
							{
								id: '3',
								name: '运营3',
								path: "/mantope"
							},
						],

					},

					{
						rootRul: '/control',
						child: [{
								id: '1',
								name: '风险1',
								path: "/control"
							},
							{
								id: '2',
								name: '风险2',
								path: "/control"
							},
							{
								id: '3',
								name: '风险3',
								path: "/control"
							},
						],

					},

					{
						rootRul: '/manres',
						child: [{
								id: '1',
								name: '能源1',
								path: "/manres"
							},
							{
								id: '2',
								name: '能源2',
								path: "/manres"
							},
							{
								id: '3',
								name: '能源3',
								path: "/manres"
							},
						],

					},

					{
						rootRul: '/sysauth',
						child: [{
								id: '1',
								name: '认证1',
								path: "/sysauth"
							},
							{
								id: '2',
								name: '认证2',
								path: "/sysauth"
							},
							{
								id: '3',
								name: '认证3',
								path: "/sysauth"
							},
						],

					},

					{
						rootRul: '/syssys',
						child: [{
								id: '1',
								name: '运维1',
								path: "/syssys"
							},
							{
								id: '2',
								name: '运维2',
								path: "/syssys"
							},
							{
								id: '3',
								name: '运维3',
								path: "/syssys"
							},
						]

					},

				],
			
				menulistArr:[],
				defaultActive:'home', //默认首次打开菜单
			}
		},
		mounted() {
			this.menulistArr = this.menuList[0].child
			this.defaultActive = this.menuList[0].child[0].path
			if(this.menuList[0].child[0].child){
				this.defaultActive = this.menuList[0].child[0].child[0].path
				let gransunArr = this.menuList[0].child[0].child[0].child
				if(gransunArr.length > 0){
					this.defaultActive = gransunArr[0].path
				}
			}
			
			console.log(this.defaultActive)
		},
		methods: {
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
				let len = this.menuList.length
				for(let i =0; i<len; i++){
					let ind = i
					if(this.menuList[ind].rootRul == keyPath){
						this.menulistArr = this.menuList[ind].child
						this.defaultActive = this.menuList[ind].child[0].path
						let sunArr = this.menuList[ind].child[0].child
						if(sunArr.length > 0){
							
							this.defaultActive = sunArr[0].path
							
							let gransunArr = sunArr[0].child
							
							if(gransunArr.length > 0){
								this.defaultActive = gransunArr[0].path
								
							}
							
						}
					}
				}
				this.adminIndex = key - 1
			},
			handleOpen() {

			},
			handleClose() {

			}
		}
	}
</script>

<style lang="scss">
	.el-header,
	.el-footer {
		background-color: #545c64;
		color: #fff;
		text-align: center;
		line-height: 60px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		padding: 0 !important;
	}

	.el-footer {
		height: 50px !important;
		line-height: 50px !important;
		font-size: 14px;
	}

	.el-container {
		width: 100%;
		height: 100vh;
	}

	.el-aside {
		width: 200px !important;
		background: #545c64;
	}

	.el-menu {
		border-right: solid 1px #545c64 !important;
	}
</style>
