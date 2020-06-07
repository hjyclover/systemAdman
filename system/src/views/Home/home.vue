<template>
	<div class="loginPage">
		<el-container v-if="hasLogin">
			<el-header>
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
					mode="horizontal"
					@select="handleSelect"
					router
				>
					<el-menu-item :index="item.path" v-for="(item, index) in navBar" :key="index">{{ item.name }}</el-menu-item>
				</el-menu>
			</el-header>
			<el-main>
				<router-view />
			</el-main>
			<el-footer style="height: 40px; line-height: 40px;"><span class="footer">Copyright©2020-2100 爱动漫工作室 版权所有</span></el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				activeIndex: '/admin',
				navBar: [
					{ id: '1', name: '首页', path: '/admin' },
					{ id: '2', name: '资源管理', path: '/resourcemarge' },
					{ id: '3', name: '人员管理', path: '/numbermarger' },
					{ id: '4', name: '文章管理', path: '/residemarge' },
					{ id: '5', name: '系统维护', path: '/systemmarge' }
				],
				hasLogin:true
			}
		},
		methods:{
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
			}
		},
		mounted() {
			console.log(this.$route.path)
			if(this.$route.path == '/'){
				this.activeIndex = '/admin'
				this.$router.push({
					path:'/admin'
				})
			}else{
				this.activeIndex = this.$route.path
			}
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
</style>
