<template>
	<div class="page">
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<i class="el-icon-user-solid typeItemIcon"></i>
					<div class="typeData flexBox">
						<p>注册人数</p>
						<p>666</p>
					</div>
				</div>
			</el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.page{
		padding: $allPadding;
		
		.grid-content{
			display: flex;
			justify-content: center;
			padding: $allPadding;
			text-align: center;
			.typeItemIcon{
				color: $defaultColor;
				font-size: $bigFontSize;
				margin-right: 20px;
			}
			.typeData{
				line-height: 1.5;
			}
		}
	}
	
	
	
	 .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
</style>
