<template>
	<div class="container">
		<div class="top" @click="goHome" v-show="showAbs">
			<i class="iconfont back">&#xe624;</i>
		</div>
		<div class="header" v-show="!showAbs" :style="opacitys">
			<div class="header_left">
				<i class="iconfont">&#xe624;</i>
			</div>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				showAbs:true,
				opacitys:{
					opacity:0
				}
			}
		},
		methods:{
			goHome(){
				this.$router.push('/')
			},
			handleScroll(){
				const top = document.documentElement.scrollTop
				if (top > 60 ) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity 
					this.opacitys = {opacity}
					this.showAbs = false
				}else{
					this.showAbs = true
				}
			}
		},
		//页面创建后执行
		mounted (){
			window.addEventListener('scroll',this.handleScroll)
		},
		//页面死亡前执行
		unmounted (){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>

<style scoped="scoped" lang="stylus">
@import '~@/assets/styles/varibles.styl'
	.top{
		position: absolute;
		left: .2rem;
		top: .2rem;
		width: .8rem;
		height:.8rem;
		border-radius: .4rem;
		background-color: rgba(0,0,0,0.8);
		text-align: center;
		line-height: .8rem;
		.back{
			color: #fff;
			font-size: .4rem;
		}
	}
	.header{
		z-index: 90;
		position:fixed;
		top:0;
		left: 0;
		right: 0;
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