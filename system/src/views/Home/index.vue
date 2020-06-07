<template>
	<div class="homeHeadBox">
		<div class="homeHead">
			<div class="homeHeadTitle bg-purple flexBox">
				<span>999</span>
				<span>注册人数</span>
			</div>
			<div class="homeHeadTitle bg-purple flexBox">
				<span>999</span>
				<span>文章数量</span>
			</div>
			<div class="homeHeadTitle bg-purple flexBox">
				<span>999</span>
				<span>注册人数</span>
			</div>
			<div class="homeHeadTitle bg-purple flexBox">
				<span>999</span>
				<span>注册人数</span>
			</div>
		</div>
		
		
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped="scoped">

.homeHead{
	width: 98%;
	padding: 1%;
	height: 160px;
	display: flex;
	justify-content: space-between;
	.homeHeadTitle{
		width: 24%;
		height: 100%;
		span{
			font-size: 20px;
			height: 50px;
			line-height: 50px;
			color: mediumvioletred;
			&:last-child{
				font-size: 22px;
				font-weight: bold;
				color: #333333;
			}
		}
	}
}


.bg-purple {
	background: #d3dce6;
}

</style>
