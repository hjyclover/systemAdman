<template>
	<div id="app">
		<transition>
			<router-view />
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
			
		};
	},
};
</script>
<style lang="scss">
@import './assets/css/reset.css';

html,
body,
#app,
.el-container {
	width: 100%;
	height: 100%;
}
.el-main{
	line-height: 0 !important;
}
.el-header,
.el-footer {
	background-color: #545c64;
	color: $defaultBgColor;
	text-align: center;
	line-height: 60px;
	height: 60px !important;
}
.el-footer {
	height: 50px !important;
	line-height: 50px !important;
	font-size: 12px;
	color: #fff;
}

.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

.loginPage{
	width: 100%;
	height: 100%;
}
.el-form-item__label{
	color: #FFFFFF !important; 
}
</style>
