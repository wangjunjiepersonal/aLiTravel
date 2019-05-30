<template>
	<div class="icon_container">
		<swiper ref="mySwiper" :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon_img">
						<img :src="item.imgUrl" alt="" />
					</div>
					<p>{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>	
	</div>
</template>

<script>
	export default {
		data(){
			return {
				swiperOption:{
					autoplay:false
				}
			}
		},
		props:{
			list:Array
		},
		computed:{
			pages(){
				const pages = []
				this.list.forEach((item,index)=>{
					//将 模拟的数据按照8个一组分为二维数组  原理为 通过乡下取整获取0/1的索引 前8个的索引都为0 第9个索引为1
					const page = Math.floor(index/8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/varibles.styl'
	@import '~@/assets/styles/mixin.styl'
	.icon_container >>> .swiper-container{
		height:0
		padding-bottom: 50%
	}
	.icon_container{
		.icon{
			position: relative
			float: left
			width: 25%
			padding-bottom: 25%
			overflow: hidden
			height:0
			.icon_img{
				position: absolute
				top: 0
				left: 0
				right: 0
				bottom:.44rem
				box-sizing: border-box
				padding:.1rem
				img{
					display: block
					height: 100%
					margin: .2rem auto
				}
			}
			p{
				position: absolute
				left: 0
				right: 0
				bottom:.0;
				line-height: .44rem
				height:.44rem
				color:$dearTextColor
				text-align:center
				ellipsis()
			}
		}
	}
</style>