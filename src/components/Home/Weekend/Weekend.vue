<template>
	<div class="container">
		<div class="title">周末游</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
					<div class="img_content">
						<img :src="item.imgUrl"/>
					</div>
					<div class="item_info">
						<p>{{item.title}}</p>
						<p>{{item.desc}}</p>
					</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		props:{
			list:Array
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/mixin.styl'
	.title{
		line-height: .8rem
		background-color: #eee
		text-indent: .2rem
	}
	.item{
		.img_content{
			overflow: hidden
			height:0
			padding-bottom: 37.1%
		}
		img{
			width:100%
		}
		.item_info{
			padding: .1rem
			p:first-child{
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			}
			p:last-child{
				line-height: .4rem
				color: #999
				ellipsis()
			}
		}
	}
</style>