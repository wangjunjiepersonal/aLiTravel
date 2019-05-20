<template>
	<div class="icon_container">
		<swiper ref="mySwiper">
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
				iconList:[
					{
						id:'0001',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						desc:'热门景点'
					},
					{
						id:'0002',
						imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
						desc:'一日游'
					},
					{
						id:'0003',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
						desc:'北京碧游'
					},
					{
						id:'0004',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
						desc:'木马'
					},
					{
						id:'0005',
						imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
						desc:'长城'
					},
					{
						id:'0006',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
						desc:'故宫'
					},
					{
						id:'0007',
						imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
						desc:'动植物园'
					},
					{
						id:'0008',
						imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png',
						desc:'每周好货'
					},
					{
						id:'0009',
						imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
						desc:'欢乐谷'
					}
				]
			}
		},
		computed:{
			pages(){
				const pages = []
				this.iconList.forEach((item,index)=>{
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