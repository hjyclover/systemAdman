<template>
	<div class="loginPage">
		<div class="loginBox" v-if="isLoginIn">
			<div class="loginTitle">注册</div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
				<el-form-item label="账号" prop="username" class="formLabel"><el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="密码" prop="pass" class="formLabel"><el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="确认密码" prop="checkPass" class="formLabel"><el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="电话号码" prop="phonenumber" class="formLabel"><el-input v-model.number="ruleForm.phonenumber"></el-input></el-form-item>
				<el-form-item label="验证码" prop="code" class="formLabel"><el-input v-model.number="ruleForm.code"></el-input></el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
		
		<div class="loginBox lgBox" v-else>
			<div class="loginTitle">登录</div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
				<el-form-item label="账号" prop="username" class="formLabel"><el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="密码" prop="pass" class="formLabel"><el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input></el-form-item>
				
				<el-form-item>
					<el-button type="primary" @click="login('ruleForm')">登录</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		var username =  (rule, value, callback) => {
			if (!value) {
				return callback(new Error('账号不能为空'));
			}
			setTimeout(() => {
				callback();
			}, 1000);
		};
		var checkAge = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('手机号码不能为空'));
			}
			setTimeout(() => {
				if (!Number.isInteger(value)) {
					callback(new Error('请输入数字值'));
				} 
			}, 1000);
		};
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				if (this.ruleForm.checkPass !== '') {
					this.$refs.ruleForm.validateField('checkPass');
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm.pass) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		var code = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('验证码不能为空'));
			}
			setTimeout(() => {
				callback();
			}, 1000);
		}
		return {
			ruleForm: {
				username:'',
				pass: '',
				checkPass: '',
				phonenumber: '',
				code:'',
			},
			rules: {
				username:[{ validator: username, trigger: 'blur' }],
				pass: [{ validator: validatePass, trigger: 'blur' }],
				checkPass: [{ validator: validatePass2, trigger: 'blur' }],
				phonenumber: [{ validator: checkAge, trigger: 'blur' }],
				code:[{ validator: code, trigger: 'blur' }]
			},
			isLoginIn:true
		};
	},
	methods: {
		submitForm(formName) {
			this.isLoginIn = false
			this.$refs[formName].validate(valid => {
				console.log(this.isLoginIn)
				if (valid) {
					
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		login(formName){
			
			localStorage.setItem("hasLogin",true)
			this.$router.push({
				path:"/"
			})
			this.$router.go(0)
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.loginPage {
	background-image: url(../../assets/l-r-bg.jpg);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding-top: 5% ;
	box-sizing: border-box;
	.loginBox{
		width: 35%;
		height: 450px;
		padding: 1% 2%;
		background: rgba($color: #f4f4f4, $alpha: 0.5);
		box-sizing: border-box;
		margin: auto ;
		border-radius: 4px;
		color: #FFFFFF;
		
		.formLabel{
			color: #FFFFFF;
		}
		.loginTitle{
			width: 100%;
			text-align: center;
			font-size: 18px;
			margin-bottom: 10px;
		}
	}
	.lgBox{
		height: 250px;
	}
}
</style>
