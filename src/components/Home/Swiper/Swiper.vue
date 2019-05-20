<template>
	<div class="swiper_container">
		<swiper :options="swiperOption" ref="mySwiper">
	    <!-- slides -->
	    <swiper-slide v-for="item of swiperList" :key="item.id">
	    	<img class="swiper_img" :src="item.imgUrl"/>
	    </swiper-slide>
	   
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				//轮播图的点盒子
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				},
				swiperList:[
						{
							id:'0001',
							imgUrl:'https://img1.qunarzz.com/p/tts3/1807/d3/dddd6805f6739902.jpg_r_640x420x90_f16738de.jpg'
						},
						{
							id:'0002',
							imgUrl:'https://img1.qunarzz.com/p/tts1/1807/42/e753205dad68d02.jpg_r_640x420x90_8b3a7863.jpg'
						},
					]
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	.swiper_container >>> .swiper-pagination-bullet-active{
		background-color: #fff
	}
	.swiper_container
		width:100%
		/*height:0
		overflow: hidden
		padding-bottom: 31.25%*/
	.swiper_img
		width:100%
		height:3rem
	

</style>