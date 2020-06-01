<template>
  <div id="app">
	  <el-container>
	    <el-header>
			<el-menu :default-active="activeIndex"  class="el-menu-demo" 
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			mode="horizontal" @select="handleSelect">
			<el-menu-item :index="item.id" v-for="(item,index) in navBar" :key="index" >{{item.name}}</el-menu-item>
			</el-menu>
		</el-header>
	    <el-main>
			<router-view/>
		</el-main>
	    <el-footer>Footer</el-footer>
	  </el-container>
  </div>
</template>
<script>
	export default {
		data(){
			return{
				activeIndex: '1',
				navBar:[
					{id:"1",name:"首页",path:"Home"},
					{id:"2",name:"编辑",path:"Home"},
					{id:"3",name:"订单",path:"Home"},
					{id:"4",name:"维护",path:"Home"},
					{id:"5",name:"系统",path:"Home"},
				]
			}
		},
		methods:{
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
		
	}
</script>
<style lang="scss" >
@import  "./assets/css/reset.css";

html,body,#app,.content{
	width:100%;
	height: 100%;
}
.el-header, .el-footer {
    background-color: #545c64;
    color: $defaultBgColor;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
 

</style>
