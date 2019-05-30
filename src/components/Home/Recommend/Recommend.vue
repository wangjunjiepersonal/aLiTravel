<template>
	<div class="container">
		<div class="title">热销推荐</div>
		<ul>
				<router-link 
					:to="'/detail/'+item.id" 
					tag="li" 
					class="item border-bottom" 
					v-for="item of list" 
					:key="item.id">
					<img :src="item.imgUrl"/>
					<div class="item_info">
						<p>{{item.title}}</p>
						<p>{{item.desc}}</p>
						<button>查看详情</button>
					</div>
			</router-link>
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
		margin-top: .2rem
		
	}
	.item{
		display: flex
		height:1.9rem
		overflow: hidden
		img{
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		}
		.item_info{
			flex: 1
			padding: .1rem
			min-width:0
			p:first-child{
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			}
			p:last-child{
				line-height: .4rem
				color: #eee
				ellipsis()
			}
			button{
				background-color: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				margin-top: .16rem
				color: #fff
				line-height: .44rem
			}
		}
	}
</style>