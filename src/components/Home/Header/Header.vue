<template>
	<div class="header">
		<div class="header_left">
			<i class="iconfont">&#xe624;</i>
		</div>
		<div class="header_input">
			<input type="text" placeholder="输入要查找的城市名称" />
			<i class="iconfont">&#xe632;</i>
		</div>
		<div class="header_right" @click="skipCity">
			{{this.city}}
			<i class="iconfont">&#xe62d;</i>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		methods:{
			skipCity(){
				this.$router.push('/city')
			}
		},
		computed:{
			...mapState(['city'])
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/varibles.styl'
	.header
		display: flex
		background-color: $bgColor
		height:$headerHeight
		color: #fff
		line-height: $headerHeight
		.header_left
			width: .64rem
			float: left	
			text-align:center
		.header_input
			position:relative
			flex: 1;
			background-color: #fff
			border-radius: 0.1rem
			margin-top: .12rem
			margin-left: .2rem
			height: 0.64rem
			color: #ccc
			line-height: 0.64rem
			input{
				width: 100%
				height: 100%
				padding-left: .5rem
				box-sizing: border-box
			}
			i
				position:absolute
				left:.06rem
				top:.02rem
			
		.header_right
			min-width: 1.04rem
			padding:0 .1rem
			float: right
			text-align: center
			i
				font-size: .24rem
			
</style>