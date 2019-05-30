<template>
	<div class="header">
		<div class="header_left" @click="back">
			<i class="iconfont">&#xe624;</i>
		</div>
		城市选择
	</div>
</template>

<script>
	export default {
		methods:{
			back(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/varibles.styl'
	.header{
		overflow: hidden
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: #fff
		background-color: $bgColor
		font-size:.32rem
		.header_left{
			width: .64rem
			float: left	
			text-align:center
		}
	}
</style>