<template>
	<div id="app">
		
		<router-view />
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
.el-header,
.el-footer {
	background-color: #545c64;
	color: $defaultBgColor;
	text-align: center;
	line-height: 60px;
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
.footer {
	font-size: 14px;
	color: #fff;
}
.loginPage{
	width: 100%;
	height: 100%;
}
.el-form-item__label{
	color: #FFFFFF !important; 
}
</style>
