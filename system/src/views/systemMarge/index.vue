<template>
	<el-container>
		<el-aside>
			<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">权限控制</span>
					</template>
						<el-menu-item index="/systemmarge/addpage">添加页面</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
						<el-submenu index="1-">
							<span slot="title">选项4</span>
							<el-menu-item class="lastMenu" index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					
					
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-main><router-view /></el-main>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: false
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>

<style lang="scss">
.el-main {
	padding: 0 !important;
}
.el-aside {
	width: 200px !important;
}
.el-main .el-container .el-main {
	padding: 20px !important;
}
.el-submenu .el-menu-item{
	padding: 10px !important;
}
.el-submenu__title{
	padding: 10px !important;
	text-align: left;
}
.el-menu--inline .el-submenu__title{
	text-align: center;
}
.lastMenu{
	text-align: right;
}
</style>
