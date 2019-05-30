<template>
	<div class="swiper_container" v-if="showSwiper">
		<swiper :options="swiperOption" ref="mySwiper">
	    <!-- slides -->
	    <swiper-slide v-for="item of list" :key="item.id">
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
			}
		},
		props:{
			list:Array
		},
		computed:{
			showSwiper(){
				return this.list.length
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
		height:0
		overflow: hidden
		padding-bottom: 31.25%
	.swiper_img
		width:100%
		height:3rem
	

</style>