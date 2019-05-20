<template>
	<div class="header">
		<div class="header_left">
			<i class="iconfont">&#xe624;</i>
		</div>
		<div class="header_input">
			<i class="iconfont">&#xe632;</i>
			输入城市景点游玩主题
		</div>
		<div class="header_right">
			城市
			<i class="iconfont">&#xe62d;</i>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/varibles.styl'
	.header
		display: flex
		background-color: $bgColor
		height:.86rem
		color: #fff
		line-height: .86rem
		.header_left
			width: .64rem
			float: left	
			text-align:center
		.header_input
			flex: 1;
			background-color: #fff
			border-radius: 0.1rem
			margin-top: .12rem
			margin-left: .2rem
			height: 0.64rem
			color: #ccc
			line-height: 0.64rem
			i
				margin: 0.1rem;
			
		.header_right
			width: 1.24rem
			float: right
			text-align: center
			i
				font-size: .24rem
			
</style>