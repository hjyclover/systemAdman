<template>
	<div>
		<el-button type="text" @click="centerDialogVisible = true">add New PAGE</el-button>
		<el-dialog
		  title="提示"
		  :visible.sync="centerDialogVisible"
		  width="30%"
		  center>
		  
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				
			  <el-form-item label="菜单名称" >
			    <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="上级菜单" >
			    <el-input type="text" v-model="ruleForm.lastMenu" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="菜单URL" >
			    <el-input type="text" v-model="ruleForm.menuURL"></el-input>
			  </el-form-item>
				<el-form-item label="授权标识" >
				  <el-input type="text" v-model="ruleForm.sign"></el-input>
				</el-form-item>
				<el-form-item label="排序号" >
				  <el-input type="text" v-model="ruleForm.order"></el-input>
				</el-form-item>
				<el-form-item label="菜单图标" >
				  <el-input type="text" v-model="ruleForm.icon"></el-input>
				</el-form-item>
				
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
			
			
			
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="centerDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				 centerDialogVisible: false,
				 ruleForm:[
					{
						name:'',
						lastMenu:'',
						menuURL:'',
						sign:'',
						order:'',
						icon:''
					}
				 ]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	
</style>
