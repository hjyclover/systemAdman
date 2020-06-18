<template>
	<div class="loginPage">
			<div class="bgActive">
				<el-image v-for="(item,index) in bgActiveImg" :key="index" fit="fill"
				 :class="item.className" :src="item.imgUrl"
				 ></el-image>
			</div>
			<div class="effectImg">
				<el-image class="logo"	:src="imgUrl"	fit="contain"></el-image>
				<span class="logoText">科韵智慧</span>
			</div>
			<div class="lg-inp-box">
				<div class="lg-title">智慧校园运营平台</div>
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
				  
					<el-form-item prop="pass" class="lo-inp">
				    <el-input type="text" placeholder="请输入登录账号" v-model="ruleForm.pass" autocomplete="off">
							 <i slot="prefix" class="iconfont icon-my icon"></i>
						</el-input>
				  </el-form-item>
					
				  <el-form-item  prop="checkPass" class="lo-inp">
				    <el-input  type="password" placeholder="请输入登录密码" v-model="ruleForm.checkPass" autocomplete="off">
							 <i slot="prefix" class="iconfont icon-lock icon"></i>
						</el-input>
				  </el-form-item>
					
					<!-- <el-form-item  prop="checkPass" class="lo-inp">
					  <el-input  type="text" placeholder="请输入验证码" v-model="ruleForm.checkPass" autocomplete="off">
							 <i slot="prefix" class="iconfont icon-dunpai icon"></i>
						</el-input>
					</el-form-item> -->
				  
				  <el-form-item class="lo-inp lo-btn">
				    <el-button type="primary" round @click="submitForm('ruleForm')" class="lg-btn">提交</el-button>
				    <el-button type="danger" round @click="resetForm('ruleForm')" class="lg-btn">重置</el-button>
				  </el-form-item>
					
				</el-form>
			</div>
	</div>
</template>

<script>
	export default {
	    data() {
	     
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入账号'));
	        } else {
	          if (this.ruleForm.checkPass !== '') {
	            this.$refs.ruleForm.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } //else if (value !== this.ruleForm.pass) {
	          // callback(new Error('输入密码有误!'));
	        // } 
					else {
	          callback();
	        }
	      };
	      return {
	        ruleForm: {
	          pass: '',
	          checkPass: '',
	        },
	        rules: {
	          pass: [{ validator: validatePass, trigger: 'blur' }],
	          checkPass: [ { validator: validatePass2, trigger: 'blur' }]
	        },
					imgUrl:require("../../static/lgimg/logo.png"),
					bgActiveImg:[
						{className:'home-active-1', imgUrl:require("../../static/lgimg/home-active-1.png"),imgWidth:"300",imgHeight:"260"},
						{className:'home-active-2', imgUrl:require("../../static/lgimg/home-active-2.png"),imgWidth:"300",imgHeight:"280"},
						{className:'home-active-3', imgUrl:require("../../static/lgimg/home-active-3.png"),imgWidth:"300",imgHeight:"260"},
						{className:'home-active-4', imgUrl:require("../../static/lgimg/home-active-4.png"),imgWidth:"125",imgHeight:"190"},
						{className:'home-active-5', imgUrl:require("../../static/lgimg/home-active-5.png"),imgWidth:"125",imgHeight:"150"},
						{className:'home-active-6', imgUrl:require("../../static/lgimg/home-active-6.png"),imgWidth:"80",imgHeight:"80"},
						{className:'home-active-7', imgUrl:require("../../static/lgimg/home-active-7.png"),imgWidth:"80",imgHeight:"80"},
						{className:'home-active-8', imgUrl:require("../../static/lgimg/home-active-8.png"),imgWidth:"200",imgHeight:"267"},
						{className:'home-active-9', imgUrl:require("../../static/lgimg/home-active-9.png"),imgWidth:"120",imgHeight:"267"},
						{className:'home-active-10', imgUrl:require("../../static/lgimg/home-active-10.png"),imgWidth:"150",imgHeight:"267"},
						{className:'home-active-11', imgUrl:require("../../static/lgimg/home-active-11.png"),imgWidth:"80",imgHeight:"267"},
						{className:'home-active-12', imgUrl:require("../../static/lgimg/home-active-12.png"),imgWidth:"150",imgHeight:"267"},
						{className:'home-active-13', imgUrl:require("../../static/lgimg/home-active-1-shadow.png"),imgWidth:"300",imgHeight:"267"},
						{className:'home-active-14', imgUrl:require("../../static/lgimg/home-active-2-shadow.png"),imgWidth:"300",imgHeight:"267"},
						{className:'home-active-15', imgUrl:require("../../static/lgimg/home-active-3-shadow.png"),imgWidth:"300",imgHeight:"267"},
						{className:'home-active-16', imgUrl:require("../../static/lgimg/home-active-12-shadow.png"),imgWidth:"150",imgHeight:"267"},
						{className:'home-active-17', imgUrl:require("../../static/lgimg/home-active-10-shadow.png"),imgWidth:"150",imgHeight:"267"},
						{className:'home-active-18', imgUrl:require("../../static/lgimg/home-active-9-shadow.png"),imgWidth:"120",imgHeight:"267"},
						{className:'home-active-19', imgUrl:require("../../static/lgimg/home-active-11-shadow.png"),imgWidth:"80",imgHeight:"267"},
						{className:'home-active-20', imgUrl:require("../../static/lgimg/home-active-8-shadow.png"),imgWidth:"180",imgHeight:"267"},
					]
	      
				};
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	  }
</script>

<style lang="scss" scoped="scoped">
	@import  '../../assets/css/animations.css';
	.loginPage{
		width: 100%;
		height: 100vh;
		background: url(../../assets/image/common/lg-Bg.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		.lg-inp-box{
			width: 520px;
			height: 640px;
			background: #fff;
			border-radius: 10px;
			position: relative;
			z-index: 999;
			right: 10%;
			top: calc(50% - 500px);
			left: calc(100% - 700px);
			padding: 3%;
			box-sizing: border-box;
			-webkit-box-sizing: border-box;
			
			.lg-title{
				font-family:'huxiaobo-gdh205fa9e5df21a52';
				font-size: 34px;
			}
			
			.lo-inp{
				margin-top: 60px;
				
				/deep/ .el-input__inner{
					border: none !important ;
					border-bottom: 1px solid #DCDFE6 !important;
				}
				/deep/ .el-input--prefix .el-input__inner{
					padding-left: 40px;
					font-size: 20px;
				}
				.icon{
					color: $defaultColor;
					font-size: 26px;
				}
			}
			.lo-btn{
				margin-top: 80px;
				
				/deep/ .el-form-item__content{
					display: flex;
					justify-content: space-between;
				}
				.lg-btn{
					padding: 12px 50px !important;
				}
			}
			
			
		}
	
		.effectImg{
			width: 96%;
			padding: 20px 2%;
			.logo{
				width: 50px;
				height: 50px;
				margin-right: 10px;
			}
			.logoText{
				font-family:'huxiaobo-gdh205fa9e5df21a52';
				font-size: 30px;
				color: #fff;
			
			}
		}
	}

	.bgActive{
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100%;
	}
	.home-active-1{
		width: 300px;
		height: 260px;
		position: absolute;
		top: 17%;
		left: 24%;
		z-index: 2;
		animation: toUp 5s linear infinite;
		-moz-animation:toUp 5s linear infinite; /* Firefox */
		-webkit-animation:toUp 5s linear infinite; /* Safari and Chrome */
		-o-animation:toUp 5s linear infinite; /* Opera */
	}
	.home-active-2{
		width: 300px;
		height: 280px;
		position: absolute;
		top: 49%;
		left: 21.8%;
		z-index: 2;
		animation: toUp1 5s linear infinite;
		-moz-animation:toUp1 5s linear infinite; /* Firefox */
		-webkit-animation:toUp1 5s linear infinite; /* Safari and Chrome */
		-o-animation:toUp1 5s linear infinite; /* Opera */
	}
	.home-active-3{
		width: 300px;
		height: 260px;
		position: absolute;
		top: 32%;
	  left: 10%;
		z-index: 1;
		animation: toDown 5s linear infinite;
		-moz-animation:toDown 5s linear infinite; /* Firefox */
		-webkit-animation:toDown 5s linear infinite; /* Safari and Chrome */
		-o-animation:toDown 5s linear infinite; /* Opera */
	}
	.home-active-13{
		width: 300px;
		height: 267px;
		position: absolute;
		top: 25%;
		left: 26%;
		animation: toBig 5s linear infinite;
		-moz-animation:toBig 5s linear infinite; /* Firefox */
		-webkit-animation:toBig 5s linear infinite; /* Safari and Chrome */
		-o-animation:toBig 5s linear infinite; /* Opera */
	}
	.home-active-14{
		width: 300px;
		height: 267px;
		position: absolute;
		top: 56%;
		left: 23%;
		animation: toBig 5s linear infinite;
		-moz-animation:toBig 5s linear infinite; /* Firefox */
		-webkit-animation:toBig 5s linear infinite; /* Safari and Chrome */
		-o-animation:toBig 5s linear infinite; /* Opera */
	}
	.home-active-15{
		width: 300px;
		height: 267px;
		position: absolute;
		top: 40%;
		left: 9%;
		animation: toBig 5s linear infinite;
		-moz-animation:toBig 5s linear infinite; /* Firefox */
		-webkit-animation:toBig 5s linear infinite; /* Safari and Chrome */
		-o-animation:toBig 5s linear infinite; /* Opera */
	}
	.home-active-4{
		width: 125px;
		height: 190px;
		position: absolute;
		top: 26%;
		left: 20%;
		animation: toUp2 5s linear infinite;
		-moz-animation:toUp2 5s linear infinite; /* Firefox */
		-webkit-animation:toUp2 5s linear infinite; /* Safari and Chrome */
		-o-animation:toUp2 5s linear infinite; /* Opera */
	}
	.home-active-5{
		width: 125px;
		height: 150px;
		position: absolute;
		top: 47%;
		left: 24%;
		animation: toUp3 5s linear infinite;
		-moz-animation:toUp3 5s linear infinite; /* Firefox */
		-webkit-animation:toUp3 5s linear infinite; /* Safari and Chrome */
		-o-animation:toUp3 5s linear infinite; /* Opera */
	}
	.home-active-6{
		width: 80px;
		height: 80px;
		position: absolute;
		top: 45%;
		left: 48%;
		animation: toBig1 6s linear infinite;
		-moz-animation:toBig1 6s linear infinite; /* Firefox */
		-webkit-animation:toBig1 6s linear infinite; /* Safari and Chrome */
		-o-animation:toBig1 6s linear infinite; /* Opera */
	}
	.home-active-7{
		width: 80px;
		height: 80px;
		position: absolute;
		top: 20%;
		left: 16%;
		animation: toBig1 6s linear infinite;
		-moz-animation:toBig1 6s linear infinite; /* Firefox */
		-webkit-animation:toBig1 6s linear infinite; /* Safari and Chrome */
		-o-animation:toBig1 6s linear infinite; /* Opera */
	}
	.home-active-8{
		width: 180px;
		height: 120px;
		position: absolute;
		bottom: 17%;
		left: calc(100% - 800px);
		animation: toDown2 5s linear infinite;
		-moz-animation:toDown2 5s linear infinite; /* Firefox */
		-webkit-animation:toDown2 5s linear infinite; /* Safari and Chrome */
		-o-animation:toDown2 5s linear infinite; /* Opera */
	}
	.home-active-9{
		width: 160px;
		height: 100px;
		position: absolute;
		bottom: 22%;
		left: 10%;
		animation: toDown1 5s linear infinite;
		-moz-animation:toDown1 5s linear infinite; /* Firefox */
		-webkit-animation:toDown1 5s linear infinite; /* Safari and Chrome */
		-o-animation:toDown1 5s linear infinite; /* Opera */
	}
	.home-active-10{
		width: 120px;
		height: 90px;
		position: absolute;
		left: 44%;
		top: 5%;
		animation: toDown3 7s linear infinite;
		-moz-animation:toDown3 7s linear infinite; /* Firefox */
		-webkit-animation:toDown3 7s linear infinite; /* Safari and Chrome */
		-o-animation:toDown3 7s linear infinite; /* Opera */
	}
	.home-active-11{
		width: 60px;
		height: 40px;
		position: absolute;
		top: 8%;
		left: 24%;
		animation: toUp4 7s linear infinite;
		-moz-animation:toUp4 7s linear infinite; /* Firefox */
		-webkit-animation:toUp4 7s linear infinite; /* Safari and Chrome */
		-o-animation:toUp4 7s linear infinite; /* Opera */
	}
	.home-active-12{
		width: 150px;
		height: 110px;
		position: absolute;
		right: 4%;
		top: 2%;
		animation: toDown4 7s linear infinite;
		-moz-animation:toDown4 7s linear infinite; /* Firefox */
		-webkit-animation:toDown4 7s linear infinite; /* Safari and Chrome */
		-o-animation:toDown4 7s linear infinite; /* Opera */
	}
	.home-active-16{
		width: 130px;
		height: 90px;
		position: absolute;
		right: 0%;
		top: 16%;
		animation: toBig2 7s linear infinite;
		-moz-animation:toBig2 7s linear infinite; /* Firefox */
		-webkit-animation:toBig2 7s linear infinite; /* Safari and Chrome */
		-o-animation:toBig2 7s linear infinite; /* Opera */
	}
	.home-active-17{
		width: 100px;
		height: 80px;
		position: absolute;
		left: 42%;
		top: 19%;
		animation: toBig3 7s linear infinite;
		-moz-animation:toBig3 7s linear infinite; /* Firefox */
		-webkit-animation:toBig3 7s linear infinite; /* Safari and Chrome */
		-o-animation:toBig3 7s linear infinite; /* Opera */
	}
	.home-active-18{
		width: 120px;
		height: 140px;
		position: absolute;
		bottom: 0%;
		left: 0%;
		animation: toBig4 5s linear infinite;
		-moz-animation:toBig4 5s linear infinite; /* Firefox */
		-webkit-animation:toBig4 5s linear infinite; /* Safari and Chrome */
		-o-animation:toBig4 5s linear infinite; /* Opera */
	}
	.home-active-19{
		width: 50px;
		height: 30px;
		position: absolute;
		top: 14%;
		left: 23%;
		animation: toBig5 7s linear infinite;
		-moz-animation:toBig5 7s linear infinite; /* Firefox */
		-webkit-animation:toBig5 7s linear infinite; /* Safari and Chrome */
		-o-animation:toBig5 7s linear infinite; /* Opera */
	}
	.home-active-20{
		width: 160px;
		height: 100px;
		position: absolute;
		bottom: 0%;
		left: calc(100% - 600px);
		animation: toBig6 5s linear infinite;
		-moz-animation:toBig6 5s linear infinite; /* Firefox */
		-webkit-animation:toBig6 5s linear infinite; /* Safari and Chrome */
		-o-animation:toBig6 5s linear infinite; /* Opera */
	}
</style>
