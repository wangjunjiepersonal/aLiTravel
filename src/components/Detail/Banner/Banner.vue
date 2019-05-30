<template>
	<div class="container">
		<div class="banner" @click="isGallary">
			<img :src="bannerImg" alt="" />
			<div class="banner_info">
				<p>{{this.sightName}}</p>
				<p><i class="iconfont">&#xe63a;</i>{{this.gallaryImgs.length}}</p>
			</div>
		</div>
		<Gallary @close="closeGallary" :imgs="gallaryImgs" v-show="showGallary"></Gallary>
	</div>
</template>

<script>
	import Gallary from '../../Common/Gallary/Gallary.vue'
	export default {
		props:{
			sightName:String,
			gallaryImgs:Array,
			bannerImg:String,
		},
		data(){
			return{
				showGallary:false
			}
		},
		methods:{
			isGallary(){
				this.showGallary = true
			},
			closeGallary(){
				this.showGallary = false
			}
		},
		components:{
			Gallary
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	.banner{
		position: relative
		overflow: hidden
		height:0
		padding-bottom: 55%
		img{
			width: 100%
		}
		.banner_info{
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			p:first-child{
				flex: 1
				font-size: .32rem
				padding: .1rem
				padding-left: .3rem
				color: #fff
			}
			p:last-child{
				margin: .12rem .14rem 0 0
				padding: 0.1rem
				line-height: .32rem
				height:.32rem
				border-radius: .2rem
				background-color: rgba(0,0,0,0.8)
				color: #fff
				font-size: .24rem
				.iconfont{
					font-size: .24rem
					margin-right: .1rem
				}
			}
		}
	}
</style>